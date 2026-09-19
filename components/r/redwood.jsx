import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfo87_b9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfo87_b9r"/>`,
		"fallback": "catppuccin:redwood",
	});
}

export default Component;
