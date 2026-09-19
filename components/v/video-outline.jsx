import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5y6i5byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5y6i5byr"/>`,
		"fallback": "eva:video-outline",
	});
}

export default Component;
