import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiw02y_uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiw02y_uk"/>`,
		"fallback": "lucide:letter-z",
	});
}

export default Component;
