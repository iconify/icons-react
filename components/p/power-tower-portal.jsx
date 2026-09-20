import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp3qq1znw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp3qq1znw"/>`,
		"fallback": "roentgen:power-tower-portal",
	});
}

export default Component;
