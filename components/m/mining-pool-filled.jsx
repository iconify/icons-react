import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg062c9yd.css';
import '../../css/w/w4rah7bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg062c9yd"/><path clip-rule="evenodd" class="w4rah7bzs"/>`,
		"fallback": "bitcoin-icons:mining-pool-filled",
	});
}

export default Component;
