import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9fxioceu.css';
import '../../css/o/oobt47bdu.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9fxioceu"/><path class="oobt47bdu"/><path class="bkqbhrlym"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-passing-grade-button",
	});
}

export default Component;
