import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy10jsbis.css';
import '../../css/x/xka64wa2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dy10jsbis"/><path class="xka64wa2k"/></g>`,
		"fallback": "fluent-emoji-flat:ok-hand-dark",
	});
}

export default Component;
