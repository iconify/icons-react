import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/oo4jlxnap.css';
import '../../css/g/gp71qszsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="oo4jlxnap"/><path class="gp71qszsf"/></g>`,
		"fallback": "hugeicons:typescript-01",
	});
}

export default Component;
