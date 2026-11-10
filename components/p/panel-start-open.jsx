import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hg7-85tex.css';
import '../../css/h/hiw8i1b6m.css';
import '../../css/a/aig8d5ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hg7-85tex"/><path class="hiw8i1b6m"/><path class="aig8d5ban"/></g>`,
		"fallback": "andrsrxn:panel-start-open",
	});
}

export default Component;
