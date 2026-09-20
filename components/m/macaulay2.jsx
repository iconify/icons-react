import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujncc3bkv.css';
import '../../css/d/dbt4bdbnj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujncc3bkv"/><path class="dbt4bdbnj"/></g>`,
		"fallback": "material-icon-theme:macaulay2",
	});
}

export default Component;
