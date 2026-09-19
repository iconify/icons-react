import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tauj59bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tauj59bxp"/>`,
		"fallback": "circum:mug-1",
	});
}

export default Component;
