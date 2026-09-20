import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ics0zif6q.css';
import '../../css/o/op6-m42gl.css';
import '../../css/o/oc1avbb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ics0zif6q"/><path clip-rule="evenodd" class="op6-m42gl"/><path class="oc1avbb4a"/></g>`,
		"fallback": "reicon:router2-filled",
	});
}

export default Component;
