import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpkq7mu7x.css';
import '../../css/y/yv842m9yr.css';
import '../../css/s/s_1xd9b8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpkq7mu7x"/><path class="yv842m9yr"/><path class="s_1xd9b8i"/>`,
		"fallback": "energy-icons:scour-protection-20-bold",
	});
}

export default Component;
