import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f89y2qbtf.css';
import '../../css/u/u1ez71txv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f89y2qbtf"/><path class="u1ez71txv"/>`,
		"fallback": "garden:text-color-stroke-12",
	});
}

export default Component;
