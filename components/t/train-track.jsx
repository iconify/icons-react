import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-ii4f7on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-ii4f7on"/>`,
		"fallback": "hugeicons:train-track",
	});
}

export default Component;
