import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuk24k_kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuk24k_kt"/>`,
		"fallback": "thesvg:redux-saga",
	});
}

export default Component;
