import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol3fxgb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol3fxgb8m"/>`,
		"fallback": "gridicons:stats-up",
	});
}

export default Component;
