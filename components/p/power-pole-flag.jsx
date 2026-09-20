import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6xmncb7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6xmncb7r"/>`,
		"fallback": "roentgen:power-pole-flag",
	});
}

export default Component;
