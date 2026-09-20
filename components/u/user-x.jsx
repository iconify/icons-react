import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1l4rc0mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1l4rc0mp"/>`,
		"fallback": "pixelarticons:user-x",
	});
}

export default Component;
