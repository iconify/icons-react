import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuldcn9ig.css';
import '../../css/m/m3cwncbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuldcn9ig"/><path class="m3cwncbjn"/>`,
		"fallback": "streamline-ultimate:presentation-projector-screen-budget-analytics-bold",
	});
}

export default Component;
