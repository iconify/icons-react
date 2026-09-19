import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tga5ydbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tga5ydbnr"/>`,
		"fallback": "griddy-icons:iot",
	});
}

export default Component;
