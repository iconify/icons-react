import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzmf56btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzmf56btu"/>`,
		"fallback": "cbi:spotpear-bal-v2",
	});
}

export default Component;
