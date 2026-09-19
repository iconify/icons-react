import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kt2mzyb_p.css';
import '../../css/l/lmpy58ykz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kt2mzyb_p"/><path class="lmpy58ykz"/></g>`,
		"fallback": "hugeicons:satellite-dish",
	});
}

export default Component;
