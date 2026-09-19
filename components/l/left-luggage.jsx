import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kagvsxn9c.css';
import '../../css/b/bqw1sacau.css';
import '../../css/y/yrar-0z3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kagvsxn9c"/><path class="bqw1sacau"/><path class="yrar-0z3g"/></g>`,
		"fallback": "fluent-emoji-flat:left-luggage",
	});
}

export default Component;
