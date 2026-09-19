import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp9bowwdf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp9bowwdf"/>`,
		"fallback": "fa-brands:line",
	});
}

export default Component;
