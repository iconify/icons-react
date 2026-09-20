import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvxbf4bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvxbf4bmf"/>`,
		"fallback": "mdi:question-network",
	});
}

export default Component;
