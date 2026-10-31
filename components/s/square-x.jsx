import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pec53hqgb.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pec53hqgb"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons-kawaii:square-x",
	});
}

export default Component;
