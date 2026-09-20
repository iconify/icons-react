import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t122zlbie.css';
import '../../css/m/m3m1-kbjt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="t122zlbie"/><path class="m3m1-kbjt"/></g>`,
		"fallback": "marketeq:lock-check",
	});
}

export default Component;
