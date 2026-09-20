import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fab146hml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fab146hml"/>`,
		"fallback": "thesvg-color:phpstorm",
	});
}

export default Component;
