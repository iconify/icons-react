import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jqm63dyww.css';
import '../../css/t/t46axxb4d.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="jqm63dyww"/><path class="t46axxb4d"/></g>`,
		"fallback": "garden:search-26",
	});
}

export default Component;
