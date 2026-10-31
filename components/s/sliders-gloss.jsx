import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l79oz4g8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l79oz4g8l"/>`,
		"fallback": "withicons:sliders-gloss",
	});
}

export default Component;
