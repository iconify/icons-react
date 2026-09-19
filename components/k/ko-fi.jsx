import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t_81tp26r.css';
import '../../css/q/qx8acpbmh.css';
import '../../css/y/yaxb45m8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="t_81tp26r"/><path class="qx8acpbmh"/><path clip-rule="evenodd" class="yaxb45m8g"/></g>`,
		"fallback": "hugeicons:ko-fi",
	});
}

export default Component;
