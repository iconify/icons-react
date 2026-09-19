import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rj4xxwbtu.css';
import '../../css/u/u3kt4ibdj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rj4xxwbtu"/><path class="u3kt4ibdj"/></g>`,
		"fallback": "fluent-emoji-flat:nose-dark",
	});
}

export default Component;
