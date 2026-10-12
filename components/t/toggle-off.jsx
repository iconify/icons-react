import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlvulm7ll.css';
import '../../css/e/e1tciweeq.css';
import '../../css/g/glynuobqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlvulm7ll"/><path class="e1tciweeq"/><path class="glynuobqx"/></g>`,
		"fallback": "andrsrxn:toggle-off",
	});
}

export default Component;
