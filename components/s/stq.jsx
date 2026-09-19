import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdgwvqb6z.css';
import '../../css/o/o24c5nb_o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cdgwvqb6z"/><path class="o24c5nb_o"/></g>`,
		"fallback": "cryptocurrency-color:stq",
	});
}

export default Component;
