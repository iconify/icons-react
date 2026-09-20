import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqbg4ybgf.css';
import '../../css/i/io9w8l74y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hqbg4ybgf"/><path class="io9w8l74y"/></g>`,
		"fallback": "reicon:square-top-up",
	});
}

export default Component;
