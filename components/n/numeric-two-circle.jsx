import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-26d3blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-26d3blk"/>`,
		"fallback": "mdi:numeric-two-circle",
	});
}

export default Component;
