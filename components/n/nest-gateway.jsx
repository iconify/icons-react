import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv26jgn9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv26jgn9r"/>`,
		"fallback": "catppuccin:nest-gateway",
	});
}

export default Component;
