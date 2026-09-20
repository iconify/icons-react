import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikikszp2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikikszp2p"/>`,
		"fallback": "ri:star-half-line",
	});
}

export default Component;
