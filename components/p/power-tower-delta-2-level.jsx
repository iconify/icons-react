import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h69yfbcpz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h69yfbcpz"/>`,
		"fallback": "roentgen:power-tower-delta-2-level",
	});
}

export default Component;
