import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-3o8k8yj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-3o8k8yj"/>`,
		"fallback": "game-icons:subway",
	});
}

export default Component;
