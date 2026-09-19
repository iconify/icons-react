import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lpx5w1bem.css';
import '../../css/u/ux20bf5oc.css';
import '../../css/g/g5fsc_b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lpx5w1bem"/><path class="ux20bf5oc"/><path class="g5fsc_b7r"/></g>`,
		"fallback": "hugeicons:underpants-01",
	});
}

export default Component;
