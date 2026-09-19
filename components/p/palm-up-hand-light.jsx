import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrt7j8emd.css';
import '../../css/w/w7pl6h3nh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wrt7j8emd"/><path class="w7pl6h3nh"/></g>`,
		"fallback": "fluent-emoji-flat:palm-up-hand-light",
	});
}

export default Component;
