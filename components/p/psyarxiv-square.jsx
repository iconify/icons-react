import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5rwvjb0s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5rwvjb0s"/>`,
		"fallback": "academicons:psyarxiv-square",
	});
}

export default Component;
