import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfxtz6brw.css';
import '../../css/n/nb2ajyb8n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfxtz6brw"/><path class="nb2ajyb8n"/></g>`,
		"fallback": "fluent-emoji-flat:raised-fist-medium-dark",
	});
}

export default Component;
