import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn1-m4b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn1-m4b5g"/>`,
		"fallback": "noviair-light:magnet",
	});
}

export default Component;
