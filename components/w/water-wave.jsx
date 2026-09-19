import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijbfmgylb.css';
import '../../css/m/m-majg5pe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ijbfmgylb"/><path class="m-majg5pe"/></g>`,
		"fallback": "fluent-emoji-high-contrast:water-wave",
	});
}

export default Component;
