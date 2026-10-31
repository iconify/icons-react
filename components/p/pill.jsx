import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0y8n8b_v.css';
import '../../css/m/mzxqpkbgh.css';
import '../../css/u/ua567rbre.css';
import '../../css/z/zyw023bwj.css';
import '../../css/h/hjrszmbqm.css';
import '../../css/p/p71cz581g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k y0y8n8b_v"/><path class="mzxqpkbgh wm-deco"/><path class="ua567rbre wm-k"/><path class="wm-shadow zyw023bwj"/><path class="hjrszmbqm wm-shine"/><path class="p71cz581g wm-shine"/></g>`,
		"fallback": "withicons-valentine:pill",
	});
}

export default Component;
