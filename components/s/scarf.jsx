import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq7t5p63g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq7t5p63g"/>`,
		"fallback": "iconoir:scarf",
	});
}

export default Component;
