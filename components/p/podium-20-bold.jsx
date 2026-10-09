import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-6jetbog.css';
import '../../css/h/hbbf6bc_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-6jetbog"/><path class="hbbf6bc_k"/>`,
		"fallback": "energy-icons:podium-20-bold",
	});
}

export default Component;
