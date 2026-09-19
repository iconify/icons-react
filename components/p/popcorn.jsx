import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_ghg35vl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_ghg35vl"/>`,
		"fallback": "game-icons:popcorn",
	});
}

export default Component;
