import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7swlumbk.css';
import '../../css/n/nnc-1xlhc.css';
import '../../css/r/rsi8w8bdx.css';
import '../../css/c/cur694b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7swlumbk"/><path class="nnc-1xlhc"/><path class="rsi8w8bdx"/><path class="cur694b4x"/></g>`,
		"fallback": "reicon:screencast-duotone",
	});
}

export default Component;
