import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxiyvi2in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxiyvi2in"/>`,
		"fallback": "solar:paint-brush-linear",
	});
}

export default Component;
