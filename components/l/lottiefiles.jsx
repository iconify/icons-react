import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-3qzwbmz.css';
import '../../css/b/b48b5ubwt.css';

const viewBox = {"width":81,"height":81};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-3qzwbmz"/><path class="b48b5ubwt"/></g>`,
		"fallback": "thesvg-color:lottiefiles",
	});
}

export default Component;
