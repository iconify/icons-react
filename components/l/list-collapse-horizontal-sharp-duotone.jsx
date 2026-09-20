import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/iv8f1fb4p.css';
import '../../css/t/tlk6yobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="iv8f1fb4p"/><path class="tlk6yobhf"/></g>`,
		"fallback": "keyline-icons:list-collapse-horizontal-sharp-duotone",
	});
}

export default Component;
