import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgwgjtt6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgwgjtt6z"/>`,
		"fallback": "game-icons:shop",
	});
}

export default Component;
