import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zstkoeogs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zstkoeogs"/>`,
		"fallback": "hugeicons:online-learning-01",
	});
}

export default Component;
