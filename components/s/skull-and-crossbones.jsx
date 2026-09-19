import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-qu-sxki.css';
import '../../css/x/xmlkjpbyw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r-qu-sxki"/><path class="xmlkjpbyw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:skull-and-crossbones",
	});
}

export default Component;
