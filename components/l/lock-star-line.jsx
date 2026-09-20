import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifl_fr9xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifl_fr9xs"/>`,
		"fallback": "ri:lock-star-line",
	});
}

export default Component;
