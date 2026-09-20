import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpt1l0w-s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpt1l0w-s"/>`,
		"fallback": "pinhead:payment-card-in-slot",
	});
}

export default Component;
