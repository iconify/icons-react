import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr1zkm32g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr1zkm32g"/>`,
		"fallback": "noviair:shield-off",
	});
}

export default Component;
