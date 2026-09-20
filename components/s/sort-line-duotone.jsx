import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e4mqvczqi.css';
import '../../css/s/smr_iaceq.css';
import '../../css/f/fml2qzxuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e4mqvczqi"/><path class="smr_iaceq"/><path class="fml2qzxuh"/></g>`,
		"fallback": "solar:sort-line-duotone",
	});
}

export default Component;
