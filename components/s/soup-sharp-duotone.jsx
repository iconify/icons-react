import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/th7qmabfh.css';
import '../../css/a/af7_4gx0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="th7qmabfh"/><path class="af7_4gx0u"/></g>`,
		"fallback": "keyline-icons:soup-sharp-duotone",
	});
}

export default Component;
