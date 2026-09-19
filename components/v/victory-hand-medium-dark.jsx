import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jemehmb4d.css';
import '../../css/w/wkf283bho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jemehmb4d"/><path class="wkf283bho"/></g>`,
		"fallback": "fluent-emoji-flat:victory-hand-medium-dark",
	});
}

export default Component;
