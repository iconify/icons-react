import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn0lll37g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn0lll37g"/>`,
		"fallback": "game-icons:pear",
	});
}

export default Component;
