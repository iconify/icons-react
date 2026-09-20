import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulx3utvkz.css';
import '../../css/m/mdbjrxbez.css';
import '../../css/d/d3fz6j1wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ulx3utvkz"/><path class="mdbjrxbez"/><path class="d3fz6j1wd"/></g>`,
		"fallback": "streamline-freehand-color:messages-bubble-square-lock",
	});
}

export default Component;
