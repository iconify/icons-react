import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1zbd99pl.css';
import '../../css/q/q2a7m2ire.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1zbd99pl"/><path class="q2a7m2ire"/></g>`,
		"fallback": "fluent-emoji-flat:ok-hand",
	});
}

export default Component;
