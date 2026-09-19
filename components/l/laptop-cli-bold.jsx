import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwyilbc5m.css';
import '../../css/t/txtwnjbdf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pwyilbc5m"/><path class="txtwnjbdf"/></g>`,
		"fallback": "glyphs:laptop-cli-bold",
	});
}

export default Component;
