import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwg0v_ffw.css';
import '../../css/v/vw4s4d69i.css';
import '../../css/v/vp-phbc-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwg0v_ffw"/><path class="vw4s4d69i"/><path class="vp-phbc-d"/></g>`,
		"fallback": "fluent-emoji-flat:mending-heart",
	});
}

export default Component;
