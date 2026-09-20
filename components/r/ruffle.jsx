import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn9l47b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn9l47b1z"/>`,
		"fallback": "thesvg-color:ruffle",
	});
}

export default Component;
