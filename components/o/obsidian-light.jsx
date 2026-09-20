import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5_swlbif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5_swlbif"/>`,
		"fallback": "selfhst:obsidian-light",
	});
}

export default Component;
