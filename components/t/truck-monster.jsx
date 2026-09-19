import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3ffeyb2c.css';
import '../../css/q/q33bbjb-k.css';
import '../../css/e/e05kljyix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x3ffeyb2c"/><path class="q33bbjb-k"/><path class="e05kljyix"/></g>`,
		"fallback": "hugeicons:truck-monster",
	});
}

export default Component;
