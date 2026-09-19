import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/st6a63l3l.css';
import '../../css/q/q1hikebbi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="st6a63l3l"/><path class="q1hikebbi"/></g>`,
		"fallback": "et:quote",
	});
}

export default Component;
