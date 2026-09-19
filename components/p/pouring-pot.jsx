import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt_hj7brf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt_hj7brf"/>`,
		"fallback": "game-icons:pouring-pot",
	});
}

export default Component;
