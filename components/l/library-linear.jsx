import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kek38hw4x.css';
import '../../css/z/z__g5t12m.css';
import '../../css/j/j8_7y3biq.css';
import '../../css/h/h477q4bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kek38hw4x"/><path class="z__g5t12m"/><path class="j8_7y3biq"/><path class="h477q4bel"/></g>`,
		"fallback": "solar:library-linear",
	});
}

export default Component;
