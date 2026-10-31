import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e090zebhe.css';
import '../../css/y/yyvmm6cxs.css';
import '../../css/i/iagn37brf.css';
import '../../css/i/ik857bg1p.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="e090zebhe"/><path class="wm-shine yyvmm6cxs"/><path class="iagn37brf wm-k"/><path class="ik857bg1p wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:library",
	});
}

export default Component;
