import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/towov9bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="towov9bvg"/>`,
		"fallback": "ri:typhoon-line",
	});
}

export default Component;
