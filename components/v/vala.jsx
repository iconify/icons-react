import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwj78c8sk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwj78c8sk"/>`,
		"fallback": "catppuccin:vala",
	});
}

export default Component;
