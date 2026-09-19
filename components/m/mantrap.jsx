import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo18zabia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo18zabia"/>`,
		"fallback": "game-icons:mantrap",
	});
}

export default Component;
