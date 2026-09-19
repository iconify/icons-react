import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8awi8bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8awi8bwe"/>`,
		"fallback": "hugeicons:mic-01",
	});
}

export default Component;
