import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6sxa0box.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGjNz5nrLd)" class="b6sxa0box"/><defs><linearGradient id="SVGjNz5nrLd" x1="21.994" x2="1.427" y1="21.928" y2="2.53" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:star-24",
	});
}

export default Component;
