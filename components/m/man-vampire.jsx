import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c28ewwbii.css';
import '../../css/n/n28l8nbuc.css';
import '../../css/s/sp72ipbmj.css';
import '../../css/i/ix_rxac0k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c28ewwbii"/><path class="n28l8nbuc"/><path class="sp72ipbmj"/><path class="ix_rxac0k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-vampire",
	});
}

export default Component;
