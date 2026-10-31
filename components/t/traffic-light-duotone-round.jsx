import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p810y3l_l.css';
import '../../css/t/t-3azepph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p810y3l_l"/><path class="t-3azepph"/></g>`,
		"fallback": "coolicons:traffic-light-duotone-round",
	});
}

export default Component;
