import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_v0wpbwu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_v0wpbwu"/>`,
		"fallback": "roentgen:p-small-bicycle-parking-wall-loops",
	});
}

export default Component;
