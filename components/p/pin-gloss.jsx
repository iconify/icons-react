import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsp7bnb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsp7bnb3u"/>`,
		"fallback": "withicons:pin-gloss",
	});
}

export default Component;
