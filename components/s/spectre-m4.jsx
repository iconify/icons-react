import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7hcwlb7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7hcwlb7n"/>`,
		"fallback": "game-icons:spectre-m4",
	});
}

export default Component;
