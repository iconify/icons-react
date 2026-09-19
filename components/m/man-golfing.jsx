import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zsoks0b7i.css';
import '../../css/e/ew5hiuwst.css';
import '../../css/j/jly4_cfxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zsoks0b7i"/><path class="ew5hiuwst"/><path class="jly4_cfxo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-golfing",
	});
}

export default Component;
