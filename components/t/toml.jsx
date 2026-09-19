import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep4mgw3nd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep4mgw3nd"/>`,
		"fallback": "catppuccin:toml",
	});
}

export default Component;
