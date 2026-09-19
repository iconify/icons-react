import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sje80lrlt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sje80lrlt"/>`,
		"fallback": "game-icons:radial-balance",
	});
}

export default Component;
