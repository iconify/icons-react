import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mooid3-qp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mooid3-qp"/>`,
		"fallback": "game-icons:spiral-thrust",
	});
}

export default Component;
