import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx43in0lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx43in0lo"/>`,
		"fallback": "solar:phone-bold",
	});
}

export default Component;
