import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rklufk44z.css';
import '../../css/n/nqxtptjjv.css';
import '../../css/o/oxdluxh3i.css';
import '../../css/n/nn-pwydjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rklufk44z wm-shadow"/><path class="nqxtptjjv wm-shadow"/><path class="oxdluxh3i"/><path class="nn-pwydjt"/></g>`,
		"fallback": "withicons-brutal:plane-takeoff",
	});
}

export default Component;
