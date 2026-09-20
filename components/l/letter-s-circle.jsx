import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9rv8y8ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9rv8y8ix"/>`,
		"fallback": "pixelarticons:letter-s-circle",
	});
}

export default Component;
