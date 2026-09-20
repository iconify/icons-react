import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5omk_79g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5omk_79g"/>`,
		"fallback": "ri:pin-distance-line",
	});
}

export default Component;
