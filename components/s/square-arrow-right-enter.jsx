import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iybniccqk.css';
import '../../css/m/mafzw3blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iybniccqk"/><path class="mafzw3blp"/></g>`,
		"fallback": "hugeicons:square-arrow-right-enter",
	});
}

export default Component;
