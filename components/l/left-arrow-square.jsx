import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8jcx0zgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8jcx0zgj"/>`,
		"fallback": "bxs:left-arrow-square",
	});
}

export default Component;
