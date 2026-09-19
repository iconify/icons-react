import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6kxeq0nu.css';
import '../../css/s/s70b4ab4j.css';
import '../../css/m/mch7kacqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6kxeq0nu"/><path class="s70b4ab4j"/><path class="mch7kacqs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pregnant-woman",
	});
}

export default Component;
