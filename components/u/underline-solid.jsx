import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry1gb-bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry1gb-bjh"/>`,
		"fallback": "pixel:underline-solid",
	});
}

export default Component;
