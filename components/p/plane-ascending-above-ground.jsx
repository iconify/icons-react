import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laz_kgnaq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laz_kgnaq"/>`,
		"fallback": "pinhead:plane-ascending-above-ground",
	});
}

export default Component;
