import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiumi-d3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiumi-d3b"/>`,
		"fallback": "game-icons:mid-summit",
	});
}

export default Component;
