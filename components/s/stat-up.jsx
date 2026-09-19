import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv-10c8zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv-10c8zx"/>`,
		"fallback": "iconoir:stat-up",
	});
}

export default Component;
