import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_oh_oexq.css';
import '../../css/s/sbj31abka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_oh_oexq"/><path class="sbj31abka"/></g>`,
		"fallback": "fluent-emoji-flat:nose-medium-light",
	});
}

export default Component;
