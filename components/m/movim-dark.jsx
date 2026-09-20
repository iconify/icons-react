import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5-y7okkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5-y7okkt"/>`,
		"fallback": "selfhst:movim-dark",
	});
}

export default Component;
