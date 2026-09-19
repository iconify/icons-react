import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3tr1nbdw.css';
import '../../css/j/j151t3vhr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t3tr1nbdw"/><path class="j151t3vhr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:loudly-crying-face",
	});
}

export default Component;
