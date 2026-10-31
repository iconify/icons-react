import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/estdgvbtb.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/e/e6g03lb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="estdgvbtb"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="e6g03lb7m wm-a"/></g>`,
		"fallback": "withicons-kawaii:kanban",
	});
}

export default Component;
