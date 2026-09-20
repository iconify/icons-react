import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1ohwkm-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1ohwkm-g"/>`,
		"fallback": "osmic:rental-bicycle-14",
	});
}

export default Component;
