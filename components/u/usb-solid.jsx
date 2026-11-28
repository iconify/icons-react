import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmm_pxeix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmm_pxeix"/>`,
		"fallback": "iconaut:usb-solid",
	});
}

export default Component;
