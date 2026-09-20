import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl83o0buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl83o0buq"/>`,
		"fallback": "mdi:spider-thread",
	});
}

export default Component;
