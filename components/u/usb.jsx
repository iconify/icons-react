import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brtl6grdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brtl6grdw"/>`,
		"fallback": "bx:usb",
	});
}

export default Component;
