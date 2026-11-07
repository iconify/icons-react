import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w42vh2b3z.css';
import '../../css/g/g842gvash.css';
import '../../css/w/whft0d6gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w42vh2b3z"/><path class="g842gvash"/><path class="whft0d6gf"/></g>`,
		"fallback": "solar:slider-vertical-line-duotone",
	});
}

export default Component;
