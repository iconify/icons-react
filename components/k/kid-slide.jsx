import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h52vambzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h52vambzl"/>`,
		"fallback": "game-icons:kid-slide",
	});
}

export default Component;
