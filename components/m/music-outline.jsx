import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r93y31_uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r93y31_uu"/>`,
		"fallback": "eva:music-outline",
	});
}

export default Component;
