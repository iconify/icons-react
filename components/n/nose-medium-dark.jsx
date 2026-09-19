import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nx76m0bqz.css';
import '../../css/e/ehzy-0b-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nx76m0bqz"/><path class="ehzy-0b-w"/></g>`,
		"fallback": "fluent-emoji-flat:nose-medium-dark",
	});
}

export default Component;
