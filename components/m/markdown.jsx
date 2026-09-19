import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn683-7jf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn683-7jf"/>`,
		"fallback": "catppuccin:markdown",
	});
}

export default Component;
