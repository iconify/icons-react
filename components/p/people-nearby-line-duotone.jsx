import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nborjbb0w.css';
import '../../css/z/zwbr9ihxn.css';
import '../../css/d/dicuxcbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nborjbb0w"/><path class="zwbr9ihxn"/><path class="dicuxcbax"/></g>`,
		"fallback": "solar:people-nearby-line-duotone",
	});
}

export default Component;
