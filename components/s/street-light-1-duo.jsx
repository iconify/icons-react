import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucw4zsbvs.css';
import '../../css/o/oprc5c41q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucw4zsbvs"/><path class="oprc5c41q"/></g>`,
		"fallback": "glyphs:street-light-1-duo",
	});
}

export default Component;
