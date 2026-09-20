import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idp8xebbo.css';
import '../../css/s/sirrsrb_i.css';
import '../../css/z/zkyjh5bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idp8xebbo"/><path class="sirrsrb_i"/><path class="zkyjh5bzp"/></g>`,
		"fallback": "solar:star-off-line-duotone",
	});
}

export default Component;
