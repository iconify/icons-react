import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyh3-pexd.css';
import '../../css/c/c58zvccbt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyh3-pexd"/><path class="c58zvccbt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:smiling-face-with-halo",
	});
}

export default Component;
