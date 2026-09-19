import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhuc2rm6i.css';
import '../../css/d/d72y94bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhuc2rm6i"/><path clip-rule="evenodd" class="d72y94bgj"/></g>`,
		"fallback": "griddy-icons:piggy-bank",
	});
}

export default Component;
