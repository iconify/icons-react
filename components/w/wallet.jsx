import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8vkeubrv.css';
import '../../css/k/k18o02rhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8vkeubrv"/><path class="k18o02rhp"/>`,
		"fallback": "carbon:wallet",
	});
}

export default Component;
