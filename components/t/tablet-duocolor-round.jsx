import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlsc8mb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlsc8mb0n"/>`,
		"fallback": "coolicons:tablet-duocolor-round",
	});
}

export default Component;
