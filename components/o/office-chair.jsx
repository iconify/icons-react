import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6moclfne.css';
import '../../css/m/mki7mt1ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6moclfne"/><path class="mki7mt1ys"/></g>`,
		"fallback": "hugeicons:office-chair",
	});
}

export default Component;
