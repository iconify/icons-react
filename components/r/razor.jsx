import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tv71cpgsx.css';
import '../../css/l/ll03k5bwa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tv71cpgsx"/><path class="ll03k5bwa"/></g>`,
		"fallback": "fluent-emoji-high-contrast:razor",
	});
}

export default Component;
