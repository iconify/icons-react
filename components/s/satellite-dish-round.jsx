import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oouo4ab_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oouo4ab_t"/>`,
		"fallback": "coolicons:satellite-dish-round",
	});
}

export default Component;
