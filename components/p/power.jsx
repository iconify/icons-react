import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qossc8ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qossc8ban"/>`,
		"fallback": "uil:power",
	});
}

export default Component;
