import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2su_ib8c.css';
import '../../css/s/sevrr6c0g.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e2su_ib8c"/><path class="sevrr6c0g"/><path class="bkqbhrlym"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-vacancy-button",
	});
}

export default Component;
