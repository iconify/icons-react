import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsjis7b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsjis7b9r"/>`,
		"fallback": "coolicons:sunrise-duotone-round",
	});
}

export default Component;
