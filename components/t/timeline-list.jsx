import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fws4g4j_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fws4g4j_k"/>`,
		"fallback": "hugeicons:timeline-list",
	});
}

export default Component;
