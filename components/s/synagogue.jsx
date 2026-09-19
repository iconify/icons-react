import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vuvdnvbcj.css';
import '../../css/h/ht8zsh17t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vuvdnvbcj"/><path class="ht8zsh17t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:synagogue",
	});
}

export default Component;
