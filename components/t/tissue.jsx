import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpvsyob2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpvsyob2e"/>`,
		"fallback": "pinhead:tissue",
	});
}

export default Component;
