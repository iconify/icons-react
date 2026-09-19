import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9ge0xych.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b d9ge0xych"/>`,
		"fallback": "boxicons:size-uniform",
	});
}

export default Component;
