import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phopq3u5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phopq3u5t"/>`,
		"fallback": "simple-icons:valorant",
	});
}

export default Component;
