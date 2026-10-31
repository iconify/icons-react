import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hfi2o39er.css';
import '../../css/p/p6q3_755t.css';
import '../../css/o/opki4xy1f.css';
import '../../css/i/i9rgmobgb.css';
import '../../css/t/tx6wzpb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hfi2o39er"/><path class="p6q3_755t wm-shine"/><path class="opki4xy1f wm-k"/><path class="i9rgmobgb wm-a"/><path class="tx6wzpb9u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:octagon-alert",
	});
}

export default Component;
