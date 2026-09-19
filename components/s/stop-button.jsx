import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kagvsxn9c.css';
import '../../css/r/rlughwb7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kagvsxn9c"/><path class="rlughwb7q"/></g>`,
		"fallback": "fluent-emoji-flat:stop-button",
	});
}

export default Component;
