import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euwbrpbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euwbrpbbs"/>`,
		"fallback": "noviair-light:video-lock",
	});
}

export default Component;
