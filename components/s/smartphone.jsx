import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nu2rpabka.css';
import '../../css/e/etcebbbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="nu2rpabka"/><path class="etcebbbkf"/></g>`,
		"fallback": "codex:smartphone",
	});
}

export default Component;
