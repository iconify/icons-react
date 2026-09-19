import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi1yv4ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igi1yv4ss"/>`,
		"fallback": "hugeicons:tally-3",
	});
}

export default Component;
