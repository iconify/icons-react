import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irci322_t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irci322_t"/>`,
		"fallback": "icomoon-free:pacman",
	});
}

export default Component;
