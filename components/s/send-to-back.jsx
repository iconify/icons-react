import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkewu7bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkewu7bcm"/>`,
		"fallback": "hugeicons:send-to-back",
	});
}

export default Component;
