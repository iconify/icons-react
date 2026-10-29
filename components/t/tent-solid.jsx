import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc6omccsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc6omccsd"/>`,
		"fallback": "withicons:tent-solid",
	});
}

export default Component;
