import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkbkcot3w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkbkcot3w"/>`,
		"fallback": "catppuccin:terraform",
	});
}

export default Component;
