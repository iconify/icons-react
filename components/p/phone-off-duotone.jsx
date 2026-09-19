import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z96j-fa4p.css';
import '../../css/y/y5t09yewc.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z96j-fa4p"/><path class="y5t09yewc"/><path class="n35dlibfy"/></g>`,
		"fallback": "iconamoon:phone-off-duotone",
	});
}

export default Component;
