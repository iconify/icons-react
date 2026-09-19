import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2elnvbar.css';
import '../../css/x/xzkkb-vvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e2elnvbar"/><path class="xzkkb-vvl"/></g>`,
		"fallback": "fluent-emoji-flat:trident-emblem",
	});
}

export default Component;
