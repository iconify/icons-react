import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlavk1bjm.css';
import '../../css/p/phap5z8zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xlavk1bjm"/><path class="phap5z8zh"/>`,
		"fallback": "solar:pie-chart-outline",
	});
}

export default Component;
