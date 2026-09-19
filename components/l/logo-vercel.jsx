import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq8l11ltu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq8l11ltu"/>`,
		"fallback": "famicons:logo-vercel",
	});
}

export default Component;
