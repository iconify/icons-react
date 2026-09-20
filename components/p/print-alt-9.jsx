import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/elmmu_bwy.css';
import '../../css/h/h5lxpqoun.css';
import '../../css/l/lcxhbtsdw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="elmmu_bwy"/><path class="h5lxpqoun"/><path class="lcxhbtsdw"/></g>`,
		"fallback": "marketeq:print-alt-9",
	});
}

export default Component;
