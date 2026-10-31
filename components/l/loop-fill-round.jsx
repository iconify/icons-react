import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb9daxbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb9daxbrh"/>`,
		"fallback": "coolicons:loop-fill-round",
	});
}

export default Component;
