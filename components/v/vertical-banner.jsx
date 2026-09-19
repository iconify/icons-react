import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb96msy1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb96msy1o"/>`,
		"fallback": "game-icons:vertical-banner",
	});
}

export default Component;
