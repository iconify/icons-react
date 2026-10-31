import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8l_brb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8l_brb1r"/>`,
		"fallback": "coolicons:number-4-duocolor-round",
	});
}

export default Component;
