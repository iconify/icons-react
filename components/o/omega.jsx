import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wygb0bcec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wygb0bcec"/>`,
		"fallback": "hugeicons:omega",
	});
}

export default Component;
