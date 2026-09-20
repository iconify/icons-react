import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kwpo8hb7x.css';
import '../../css/z/z44dxt--y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kwpo8hb7x"/><path class="z44dxt--y"/></g>`,
		"fallback": "proicons:symbols",
	});
}

export default Component;
