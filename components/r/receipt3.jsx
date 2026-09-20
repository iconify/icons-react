import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qczwl1bnt.css';
import '../../css/x/x-tsjh3jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="qczwl1bnt"/><path class="x-tsjh3jm"/></g>`,
		"fallback": "reicon:receipt3",
	});
}

export default Component;
