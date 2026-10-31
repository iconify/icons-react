import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrgo91_7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrgo91_7r"/>`,
		"fallback": "coolicons:shrink-fill-round",
	});
}

export default Component;
