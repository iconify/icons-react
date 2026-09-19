import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ontx3kbro.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ontx3kbro"/>`,
		"fallback": "fa6-brands:usb",
	});
}

export default Component;
