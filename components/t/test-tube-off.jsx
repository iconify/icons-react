import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veud2xb-c.css';
import '../../css/j/jmrgko33v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="veud2xb-c"/><path class="jmrgko33v"/></g>`,
		"fallback": "andrsrxn:test-tube-off",
	});
}

export default Component;
