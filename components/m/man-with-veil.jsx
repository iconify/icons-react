import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epw5b4wvf.css';
import '../../css/k/kagnzju5h.css';
import '../../css/t/t8k7tzs9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epw5b4wvf"/><path class="kagnzju5h"/><path class="t8k7tzs9g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-with-veil",
	});
}

export default Component;
