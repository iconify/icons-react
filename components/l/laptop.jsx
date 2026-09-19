import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6_qcb0k.css';
import '../../css/g/gazrs25wr.css';
import '../../css/p/p56g1hbvw.css';
import '../../css/r/r-1hfob1v.css';
import '../../css/g/gey1o-bbf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wg6_qcb0k"/><path class="gazrs25wr"/><path class="p56g1hbvw"/><path clip-rule="evenodd" class="r-1hfob1v"/><path class="gey1o-bbf"/></g>`,
		"fallback": "fluent-emoji-flat:laptop",
	});
}

export default Component;
