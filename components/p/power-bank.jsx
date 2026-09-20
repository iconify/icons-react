import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g51xk7bao.css';
import '../../css/c/cicb0qbtz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="g51xk7bao"/><path class="cicb0qbtz"/></g>`,
		"fallback": "marketeq:power-bank",
	});
}

export default Component;
