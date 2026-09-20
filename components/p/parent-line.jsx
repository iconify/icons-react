import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl4cnrbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl4cnrbjd"/>`,
		"fallback": "ri:parent-line",
	});
}

export default Component;
