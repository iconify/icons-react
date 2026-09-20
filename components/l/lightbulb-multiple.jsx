import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xug077bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xug077bsi"/>`,
		"fallback": "mdi:lightbulb-multiple",
	});
}

export default Component;
