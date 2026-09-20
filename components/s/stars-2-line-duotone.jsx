import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gyr5tgbyp.css';
import '../../css/z/z21bshiay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gyr5tgbyp"/><path class="z21bshiay"/></g>`,
		"fallback": "solar:stars-2-line-duotone",
	});
}

export default Component;
