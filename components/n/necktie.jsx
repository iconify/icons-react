import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hj9990bid.css';
import '../../css/s/sdhuidsoh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hj9990bid"/><path class="sdhuidsoh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:necktie",
	});
}

export default Component;
