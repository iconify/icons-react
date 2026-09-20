import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pryjc9bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pryjc9bug"/>`,
		"fallback": "ri:pause-circle-fill",
	});
}

export default Component;
