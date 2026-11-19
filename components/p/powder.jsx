import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nndzaacpq.css';
import '../../css/j/jt7s27u2c.css';
import '../../css/o/og5aim40b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nndzaacpq"/><path class="jt7s27u2c"/><path clip-rule="evenodd" class="og5aim40b"/></g>`,
		"fallback": "andrsrxn:powder",
	});
}

export default Component;
