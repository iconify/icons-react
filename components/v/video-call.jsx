import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uzkjk6bth.css';
import '../../css/y/yzpq66bij.css';
import '../../css/h/hq4mt9hro.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/p/p__j-35by.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uzkjk6bth"/><path class="yzpq66bij"/><path class="hq4mt9hro wm-shine"/><path class="ti7s0kwlh wm-k"/><path class="p__j-35by wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:video-call",
	});
}

export default Component;
