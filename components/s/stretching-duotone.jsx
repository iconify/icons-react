import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qa8tockca.css';
import '../../css/i/i2geekbzt.css';
import '../../css/g/g50znnbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qa8tockca"/><path clip-rule="evenodd" class="i2geekbzt"/><path class="g50znnbyv"/></g>`,
		"fallback": "reicon:stretching-duotone",
	});
}

export default Component;
