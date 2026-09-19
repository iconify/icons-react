import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyqguudvt.css';
import '../../css/j/j8kj3rs0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyqguudvt"/><path class="j8kj3rs0e"/>`,
		"fallback": "catppuccin:rmd",
	});
}

export default Component;
