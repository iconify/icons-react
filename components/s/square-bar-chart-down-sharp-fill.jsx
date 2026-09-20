import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdr0sobjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdr0sobjj"/>`,
		"fallback": "keyline-icons:square-bar-chart-down-sharp-fill",
	});
}

export default Component;
