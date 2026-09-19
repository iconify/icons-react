import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wivd8hhlh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wivd8hhlh"/>`,
		"fallback": "catppuccin:vapi",
	});
}

export default Component;
