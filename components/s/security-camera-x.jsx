import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zufjotbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zufjotbyh"/>`,
		"fallback": "noviair:security-camera-x",
	});
}

export default Component;
