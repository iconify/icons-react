import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1mic7bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1mic7bmp"/>`,
		"fallback": "noviair-light:virus",
	});
}

export default Component;
