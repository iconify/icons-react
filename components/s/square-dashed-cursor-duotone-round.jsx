import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9tf9z2qn.css';
import '../../css/x/xbna-ub1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9tf9z2qn"/><path class="xbna-ub1j"/></g>`,
		"fallback": "coolicons:square-dashed-cursor-duotone-round",
	});
}

export default Component;
