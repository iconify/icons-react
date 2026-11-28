import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqa_y83hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqa_y83hy"/>`,
		"fallback": "noviair:trash",
	});
}

export default Component;
