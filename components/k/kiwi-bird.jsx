import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg2zomk9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg2zomk9w"/>`,
		"fallback": "game-icons:kiwi-bird",
	});
}

export default Component;
