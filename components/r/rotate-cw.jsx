import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wrbf2zb1l.css';
import '../../css/m/mvpyfac0n.css';
import '../../css/x/xmtccjnlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k wrbf2zb1l"/><path class="mvpyfac0n wm-a"/><path class="wm-deco xmtccjnlj"/></g>`,
		"fallback": "withicons-kawaii:rotate-cw",
	});
}

export default Component;
