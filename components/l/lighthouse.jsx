import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb3v8nboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb3v8nboy"/>`,
		"fallback": "noviair-light:lighthouse",
	});
}

export default Component;
