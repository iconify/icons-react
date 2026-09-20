import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc2n5xbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc2n5xbhh"/>`,
		"fallback": "mdi:looks-one",
	});
}

export default Component;
