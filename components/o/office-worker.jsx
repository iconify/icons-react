import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcukncbyk.css';
import '../../css/c/cfks_qbhw.css';
import '../../css/g/gqy199pev.css';
import '../../css/i/il7u957jt.css';
import '../../css/g/gh906bbyz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fcukncbyk"/><path class="cfks_qbhw"/><path class="gqy199pev"/><path class="il7u957jt"/><path class="gh906bbyz"/></g>`,
		"fallback": "streamline-color:office-worker",
	});
}

export default Component;
