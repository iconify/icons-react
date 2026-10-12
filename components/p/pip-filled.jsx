import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxd3l36lp.css';
import '../../css/e/enpl5eboe.css';
import '../../css/u/u4jl8yfch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxd3l36lp"/><rect class="enpl5eboe"/><path class="u4jl8yfch"/></g>`,
		"fallback": "andrsrxn:pip-filled",
	});
}

export default Component;
