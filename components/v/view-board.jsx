import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj1qj2dgf.css';
import '../../css/x/xdvevhb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj1qj2dgf"/><path class="xdvevhb_b"/>`,
		"fallback": "circum:view-board",
	});
}

export default Component;
