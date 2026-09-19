import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chsrvlbet.css';
import '../../css/v/vp_1fibpv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chsrvlbet"/><path class="vp_1fibpv"/></g>`,
		"fallback": "fluent-emoji-flat:raised-back-of-hand-medium",
	});
}

export default Component;
