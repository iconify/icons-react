import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dme70mkhn.css';
import '../../css/a/ayqu2v90h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dme70mkhn"/><path class="ayqu2v90h"/></g>`,
		"fallback": "fluent-emoji-flat:palm-down-hand-medium",
	});
}

export default Component;
