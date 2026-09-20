import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2i3x8k4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2i3x8k4j"/>`,
		"fallback": "thesvg-color:tile",
	});
}

export default Component;
