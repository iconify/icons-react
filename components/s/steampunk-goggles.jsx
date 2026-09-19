import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqzy1o9tj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqzy1o9tj"/>`,
		"fallback": "game-icons:steampunk-goggles",
	});
}

export default Component;
