import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idv2q1mcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idv2q1mcc"/>`,
		"fallback": "coolicons:merge-round",
	});
}

export default Component;
