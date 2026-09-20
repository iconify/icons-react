import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chm_rl1fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chm_rl1fe"/>`,
		"fallback": "mdi:shuffle-variant",
	});
}

export default Component;
