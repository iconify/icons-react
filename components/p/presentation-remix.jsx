import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6g6i-iye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6g6i-iye"/>`,
		"fallback": "streamline-sharp:presentation-remix",
	});
}

export default Component;
