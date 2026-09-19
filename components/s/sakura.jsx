import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z1k8g4bdr.css';
import '../../css/s/sxm9p_hfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z1k8g4bdr"/><path class="sxm9p_hfo"/></g>`,
		"fallback": "hugeicons:sakura",
	});
}

export default Component;
