import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d44248blx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d44248blx"/>`,
		"fallback": "catppuccin:stencil",
	});
}

export default Component;
