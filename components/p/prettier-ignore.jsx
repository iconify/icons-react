import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agjshx11i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agjshx11i"/>`,
		"fallback": "catppuccin:prettier-ignore",
	});
}

export default Component;
