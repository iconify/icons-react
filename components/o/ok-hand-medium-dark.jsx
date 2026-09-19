import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny9qzpbxb.css';
import '../../css/h/h2yf05bcf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ny9qzpbxb"/><path class="h2yf05bcf"/></g>`,
		"fallback": "fluent-emoji-flat:ok-hand-medium-dark",
	});
}

export default Component;
