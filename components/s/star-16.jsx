import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7yku9fyc.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGhtNcBZlo)" class="i7yku9fyc"/><defs><linearGradient id="SVGhtNcBZlo" x1="14.5" x2="1.125" y1="14.332" y2="1.72" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:star-16",
	});
}

export default Component;
