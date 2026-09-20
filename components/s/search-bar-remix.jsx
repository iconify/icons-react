import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx4qrdfct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nx4qrdfct"/>`,
		"fallback": "streamline-sharp:search-bar-remix",
	});
}

export default Component;
