import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1t2ripgj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1t2ripgj"/>`,
		"fallback": "teenyicons:twitch-outline",
	});
}

export default Component;
