import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixwqk4nkf.css';
import '../../css/x/x6--uk5uj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ixwqk4nkf"/><path class="x6--uk5uj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pirate-flag",
	});
}

export default Component;
