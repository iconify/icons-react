import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w4d3zqmco.css';
import '../../css/x/x7h96s6ws.css';
import '../../css/h/hn_6axb6b.css';
import '../../css/w/wndn-ybbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w4d3zqmco wm-shadow"/><path class="wm-shadow x7h96s6ws"/><path class="hn_6axb6b"/><path class="wndn-ybbh"/></g>`,
		"fallback": "withicons-brutal:share-2",
	});
}

export default Component;
