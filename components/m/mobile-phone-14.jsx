import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkwb1-b2d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkwb1-b2d"/>`,
		"fallback": "osmic:mobile-phone-14",
	});
}

export default Component;
