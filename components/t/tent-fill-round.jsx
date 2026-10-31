import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y11mbo-6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y11mbo-6j"/>`,
		"fallback": "coolicons:tent-fill-round",
	});
}

export default Component;
