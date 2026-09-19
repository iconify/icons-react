import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsri-czvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsri-czvj"/>`,
		"fallback": "game-icons:thumb-up",
	});
}

export default Component;
