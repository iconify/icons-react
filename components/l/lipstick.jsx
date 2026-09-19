import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6ucf0o2h.css';
import '../../css/n/nq7r8b9hk.css';
import '../../css/w/wh23c_bfb.css';
import '../../css/b/b5c417-ml.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6ucf0o2h"/><path class="nq7r8b9hk"/><path class="wh23c_bfb"/><path class="b5c417-ml"/></g>`,
		"fallback": "fluent-emoji-flat:lipstick",
	});
}

export default Component;
