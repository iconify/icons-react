import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cclki6bhy.css';
import '../../css/p/p_5weqbjt.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cclki6bhy"/><path class="p_5weqbjt"/></g>`,
		"fallback": "cif:so",
	});
}

export default Component;
