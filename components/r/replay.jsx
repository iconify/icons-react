import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls11p80_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls11p80_q"/>`,
		"fallback": "mdi:replay",
	});
}

export default Component;
