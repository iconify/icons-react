import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6f-t9bqw.css';
import '../../css/n/ngt7slbgt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6f-t9bqw"/><path class="ngt7slbgt"/></g>`,
		"fallback": "fluent-emoji-flat:tokyo-tower",
	});
}

export default Component;
