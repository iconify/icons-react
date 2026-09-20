import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzbsm2bho.css';
import '../../css/e/e49ktccki.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pzbsm2bho"/><path class="e49ktccki"/></g>`,
		"fallback": "streamline-color:reduced-inequalities-flat",
	});
}

export default Component;
