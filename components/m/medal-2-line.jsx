import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqqnoyl3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqqnoyl3t"/>`,
		"fallback": "ri:medal-2-line",
	});
}

export default Component;
