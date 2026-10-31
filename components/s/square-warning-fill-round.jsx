import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl4t1zbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl4t1zbdc"/>`,
		"fallback": "coolicons:square-warning-fill-round",
	});
}

export default Component;
