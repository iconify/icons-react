import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eg0v054pq.css';
import '../../css/p/ppicqph2y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="eg0v054pq"/><path class="ppicqph2y"/></g>`,
		"fallback": "cryptocurrency-color:ppt",
	});
}

export default Component;
