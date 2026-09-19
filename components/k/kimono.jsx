import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x7eb5ebyv.css';
import '../../css/s/surceo5lz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x7eb5ebyv"/><path class="surceo5lz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:kimono",
	});
}

export default Component;
