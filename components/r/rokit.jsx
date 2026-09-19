import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0q32_b2b.css';
import '../../css/d/dzv7sjbhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0q32_b2b"/><path class="dzv7sjbhb"/>`,
		"fallback": "catppuccin:rokit",
	});
}

export default Component;
