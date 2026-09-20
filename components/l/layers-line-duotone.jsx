import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmqkr8aln.css';
import '../../css/p/pidcm6bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tmqkr8aln"/><path class="pidcm6bhc"/></g>`,
		"fallback": "solar:layers-line-duotone",
	});
}

export default Component;
