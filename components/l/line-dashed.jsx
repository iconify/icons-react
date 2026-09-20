import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1eig5b-m.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1eig5b-m"/>`,
		"fallback": "lineicons:line-dashed",
	});
}

export default Component;
