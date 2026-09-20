import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rq2b7gb3u.css';
import '../../css/p/p6alplcuh.css';
import '../../css/x/xgprosbgt.css';
import '../../css/e/ekbh0_yws.css';
import '../../css/x/xv59mui2v.css';
import '../../css/f/f-u28vbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rq2b7gb3u"/><path clip-rule="evenodd" class="p6alplcuh"/><path class="xgprosbgt"/><path class="ekbh0_yws"/><path class="xv59mui2v"/><path class="f-u28vbfb"/></g>`,
		"fallback": "solar:tuning-2-outline",
	});
}

export default Component;
