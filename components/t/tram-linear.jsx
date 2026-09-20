import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_ck4_b3q.css';
import '../../css/z/zgohmrbgb.css';
import '../../css/q/qy9-4uicp.css';
import '../../css/j/jl627cb0x.css';
import '../../css/v/v7otivbui.css';
import '../../css/c/cw4y0pbzz.css';
import '../../css/v/v6jj4ob5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l_ck4_b3q"/><path class="zgohmrbgb"/><path class="qy9-4uicp"/><path class="jl627cb0x"/><path class="v7otivbui"/><path class="cw4y0pbzz"/><path class="v6jj4ob5v"/></g>`,
		"fallback": "solar:tram-linear",
	});
}

export default Component;
