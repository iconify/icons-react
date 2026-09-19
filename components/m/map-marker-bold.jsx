import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkn1k3bqn.css';
import '../../css/d/d6ao8lora.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jkn1k3bqn"/><path class="d6ao8lora"/></g>`,
		"fallback": "glyphs:map-marker-bold",
	});
}

export default Component;
