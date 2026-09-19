import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gt2jh3yjy.css';
import '../../css/b/baeh2bb1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gt2jh3yjy"/><path class="baeh2bb1n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mushroom",
	});
}

export default Component;
