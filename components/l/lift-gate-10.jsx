import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_b0erywf.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_b0erywf"/>`,
		"fallback": "osmic:lift-gate-10",
	});
}

export default Component;
