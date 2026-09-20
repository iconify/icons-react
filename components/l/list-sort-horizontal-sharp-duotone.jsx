import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w9xq8504s.css';
import '../../css/t/tlk6yobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w9xq8504s"/><path class="tlk6yobhf"/></g>`,
		"fallback": "keyline-icons:list-sort-horizontal-sharp-duotone",
	});
}

export default Component;
