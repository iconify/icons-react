import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ju7b3cb4d.css';
import '../../css/t/tc-ist7-g.css';
import '../../css/s/slqajwrnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ju7b3cb4d"/><path clip-rule="evenodd" class="tc-ist7-g"/><path class="slqajwrnj"/></g>`,
		"fallback": "healthicons:thermometer-digital-outline-24px",
	});
}

export default Component;
