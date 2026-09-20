import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzwt4eysc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzwt4eysc"/>`,
		"fallback": "pixelarticons:volume-minus",
	});
}

export default Component;
