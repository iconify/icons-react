import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksgi1ebim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksgi1ebim"/>`,
		"fallback": "game-icons:stick-frame",
	});
}

export default Component;
