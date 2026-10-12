import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwzye8bta.css';
import '../../css/j/jmc9imbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwzye8bta"/><path class="jmc9imbsa"/></g>`,
		"fallback": "andrsrxn:teeth",
	});
}

export default Component;
