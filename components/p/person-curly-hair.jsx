import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wpc67c8fu.css';
import '../../css/y/y5r3q7bdv.css';
import '../../css/k/kyx7qvbkc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wpc67c8fu"/><path class="y5r3q7bdv"/><path class="kyx7qvbkc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-curly-hair",
	});
}

export default Component;
