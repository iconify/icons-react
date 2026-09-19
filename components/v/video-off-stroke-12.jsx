import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgzc5-b6r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgzc5-b6r"/>`,
		"fallback": "garden:video-off-stroke-12",
	});
}

export default Component;
