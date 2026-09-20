import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_ck4_b3q.css';
import '../../css/z/zgohmrbgb.css';
import '../../css/q/qy9-4uicp.css';
import '../../css/j/jl627cb0x.css';
import '../../css/x/xdc5sacat.css';
import '../../css/e/epk2vguqy.css';
import '../../css/z/zhsko8bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l_ck4_b3q"/><path class="zgohmrbgb"/><path class="qy9-4uicp"/><path class="jl627cb0x"/><path class="xdc5sacat"/><path class="epk2vguqy"/><path class="zhsko8bvk"/></g>`,
		"fallback": "solar:tram-line-duotone",
	});
}

export default Component;
