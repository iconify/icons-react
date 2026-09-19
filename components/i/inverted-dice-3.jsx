import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkuowk5pf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkuowk5pf"/>`,
		"fallback": "game-icons:inverted-dice-3",
	});
}

export default Component;
