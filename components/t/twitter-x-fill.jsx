import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrfvevb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrfvevb4j"/>`,
		"fallback": "ri:twitter-x-fill",
	});
}

export default Component;
