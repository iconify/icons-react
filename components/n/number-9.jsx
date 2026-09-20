import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y38-9crzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y38-9crzd"/>`,
		"fallback": "mdi:number-9",
	});
}

export default Component;
