import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pliod-boh.css';
import '../../css/j/j13v3cb8p.css';
import '../../css/q/qjf92tb9y.css';
import '../../css/j/jmhl2o84s.css';
import '../../css/i/i1_va1krl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pliod-boh wm-k"/><path class="j13v3cb8p wm-deco"/><path class="qjf92tb9y wm-k"/><path class="jmhl2o84s wm-k"/><path class="i1_va1krl wm-shadow"/></g>`,
		"fallback": "withicons-valentine:shield-alert",
	});
}

export default Component;
