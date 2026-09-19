import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3jil3bzc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3jil3bzc"/>`,
		"fallback": "catppuccin:vercel-ignore",
	});
}

export default Component;
