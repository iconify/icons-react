import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q09b9zepi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q09b9zepi"/>`,
		"fallback": "coolicons:venus-round",
	});
}

export default Component;
