import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmacnk1qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmacnk1qj"/>`,
		"fallback": "pixelarticons:letter-i-circle",
	});
}

export default Component;
