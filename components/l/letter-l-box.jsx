import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnwa2-bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnwa2-bgu"/>`,
		"fallback": "mdi:letter-l-box",
	});
}

export default Component;
