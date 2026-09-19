import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymfss1b1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymfss1b1g"/>`,
		"fallback": "game-icons:two-shadows",
	});
}

export default Component;
