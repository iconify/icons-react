import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drnzps6if.css';
import '../../css/f/fifx41-ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drnzps6if"/><path class="fifx41-ph"/>`,
		"fallback": "solar:tablet-bold-duotone",
	});
}

export default Component;
