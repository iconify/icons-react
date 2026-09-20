import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e9kwfkb1m.css';
import '../../css/d/dt0bl8yvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e9kwfkb1m"/><path class="dt0bl8yvj"/></g>`,
		"fallback": "streamline-sharp:landscape-2",
	});
}

export default Component;
