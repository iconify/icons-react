import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-z3oswao.css';
import '../../css/q/q7c_jrbgs.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-z3oswao"/><path class="q7c_jrbgs"/><path class="de29zjbhg"/></g>`,
		"fallback": "fluent-emoji-flat:raising-hands-medium-light",
	});
}

export default Component;
