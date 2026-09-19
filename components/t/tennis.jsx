import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jarc2sbrx.css';
import '../../css/u/ud40kobrs.css';
import '../../css/a/ai8-50cvt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jarc2sbrx"/><path class="ud40kobrs"/><path class="ai8-50cvt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tennis",
	});
}

export default Component;
