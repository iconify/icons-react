import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji5yl_z2y.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji5yl_z2y"/>`,
		"fallback": "fontisto:like",
	});
}

export default Component;
