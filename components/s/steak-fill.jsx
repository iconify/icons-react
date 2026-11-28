import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkhcm6b_s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkhcm6b_s"/>`,
		"fallback": "pullo:steak-fill",
	});
}

export default Component;
