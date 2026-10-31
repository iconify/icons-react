import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d81nw-bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d81nw-bwp wm-k"/>`,
		"fallback": "withicons:usb-gloss",
	});
}

export default Component;
