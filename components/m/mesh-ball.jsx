import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajkmzg0pj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajkmzg0pj"/>`,
		"fallback": "game-icons:mesh-ball",
	});
}

export default Component;
