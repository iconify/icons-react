import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rna3sxyap.css';
import '../../css/u/uepsy_buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rna3sxyap"/><path class="uepsy_buo"/></g>`,
		"fallback": "solar:map-arrow-up-line-duotone",
	});
}

export default Component;
