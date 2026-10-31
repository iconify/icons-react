import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6a024b6c.css';
import '../../css/y/yowmlshqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6a024b6c"/><path class="yowmlshqa"/></g>`,
		"fallback": "coolicons:table-minus-corner-duotone-round",
	});
}

export default Component;
