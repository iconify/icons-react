import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhl8kcbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhl8kcbfh"/>`,
		"fallback": "mdi:trending-neutral",
	});
}

export default Component;
