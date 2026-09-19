import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eed8x_bnm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eed8x_bnm"/>`,
		"fallback": "catppuccin:unity",
	});
}

export default Component;
