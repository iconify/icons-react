import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n41w4lshj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n41w4lshj"/>`,
		"fallback": "fontisto:low-vision",
	});
}

export default Component;
