import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d9imzes6u.css';
import '../../css/j/jaz23_qts.css';
import '../../css/x/xcf_cbcwz.css';
import '../../css/i/iyjcaz68r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="d9imzes6u"/><path class="jaz23_qts"/><path class="xcf_cbcwz"/><path class="iyjcaz68r"/></g>`,
		"fallback": "hugeicons:maps-refresh",
	});
}

export default Component;
