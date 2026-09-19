import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixo8itb4g.css';
import '../../css/k/k0mq39bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixo8itb4g"/><path class="k0mq39bwn"/>`,
		"fallback": "boxicons:location-alt-2-filled",
	});
}

export default Component;
