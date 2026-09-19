import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kixgq6lls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kixgq6lls"/>`,
		"fallback": "famicons:podium-outline",
	});
}

export default Component;
