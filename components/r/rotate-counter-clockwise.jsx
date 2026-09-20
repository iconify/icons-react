import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diykwy11w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diykwy11w"/>`,
		"fallback": "radix-icons:rotate-counter-clockwise",
	});
}

export default Component;
