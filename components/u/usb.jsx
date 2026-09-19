import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl6d0daue.css';
import '../../css/h/hnlide_cb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl6d0daue"/><path class="hnlide_cb"/>`,
		"fallback": "ion:usb",
	});
}

export default Component;
