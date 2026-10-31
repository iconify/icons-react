import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm5a0s0xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm5a0s0xs"/>`,
		"fallback": "coolicons:more-vertical-fill-round",
	});
}

export default Component;
