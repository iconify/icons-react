import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zpj5trbwg.css';
import '../../css/i/inbvg_6si.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="zpj5trbwg"/><path class="inbvg_6si"/></g>`,
		"fallback": "hugeicons:snow",
	});
}

export default Component;
