import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsj340b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsj340b1l"/>`,
		"fallback": "coolicons:wavy-check-fill-round",
	});
}

export default Component;
