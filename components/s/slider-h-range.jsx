import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruey_6b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruey_6b6m"/>`,
		"fallback": "uil:slider-h-range",
	});
}

export default Component;
