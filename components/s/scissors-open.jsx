import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7iziobxo.css';
import '../../css/v/vkjczyb4h.css';
import '../../css/j/jln9ezbnx.css';
import '../../css/h/h1boidc1q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y7iziobxo"/><path class="vkjczyb4h"/><path clip-rule="evenodd" class="jln9ezbnx"/><path class="h1boidc1q"/></g>`,
		"fallback": "glyphs-poly:scissors-open",
	});
}

export default Component;
