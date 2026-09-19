import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8g6tm0he.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8g6tm0he"/>`,
		"fallback": "fontisto:sentry",
	});
}

export default Component;
