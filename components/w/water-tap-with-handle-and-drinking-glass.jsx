import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3qka0b_e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3qka0b_e"/>`,
		"fallback": "pinhead:water-tap-with-handle-and-drinking-glass",
	});
}

export default Component;
