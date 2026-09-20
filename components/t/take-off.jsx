import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oln_8acls.css';
import '../../css/u/uqnzr4bfa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oln_8acls"/><path class="uqnzr4bfa"/></g>`,
		"fallback": "streamline-color:take-off",
	});
}

export default Component;
