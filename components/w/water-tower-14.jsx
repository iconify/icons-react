import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjo-3lbil.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjo-3lbil"/>`,
		"fallback": "osmic:water-tower-14",
	});
}

export default Component;
