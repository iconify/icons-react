import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6fuul6_a.css';
import '../../css/x/xrn-wia8n.css';
import '../../css/m/m9gj31bph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6fuul6_a"/><path class="xrn-wia8n"/><ellipse transform="rotate(30 23.477 12.592)" class="m9gj31bph"/></g>`,
		"fallback": "fluent-emoji-flat:light-blue-heart",
	});
}

export default Component;
