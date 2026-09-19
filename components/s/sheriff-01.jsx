import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2s0gacxz.css';
import '../../css/q/qgsmsue-g.css';
import '../../css/f/f1zijr3ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e2s0gacxz"/><path class="qgsmsue-g"/><path class="f1zijr3ch"/></g>`,
		"fallback": "hugeicons:sheriff-01",
	});
}

export default Component;
