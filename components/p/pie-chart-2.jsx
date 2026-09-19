import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj27b0b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj27b0b7h"/>`,
		"fallback": "fontisto:pie-chart-2",
	});
}

export default Component;
