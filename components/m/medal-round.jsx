import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px3fuacde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px3fuacde"/>`,
		"fallback": "coolicons:medal-round",
	});
}

export default Component;
