import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ernz2mdgn.css';
import '../../css/b/bhym49h5q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ernz2mdgn"/><path class="bhym49h5q"/></g>`,
		"fallback": "cryptocurrency-color:plr",
	});
}

export default Component;
