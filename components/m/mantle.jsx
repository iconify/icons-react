import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mukfikl7f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mukfikl7f"/>`,
		"fallback": "catppuccin:mantle",
	});
}

export default Component;
