import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8_q7kbcv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8_q7kbcv"/>`,
		"fallback": "game-icons:male",
	});
}

export default Component;
