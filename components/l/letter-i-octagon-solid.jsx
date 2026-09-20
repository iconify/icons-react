import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hicpc4xzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hicpc4xzp"/>`,
		"fallback": "mynaui:letter-i-octagon-solid",
	});
}

export default Component;
