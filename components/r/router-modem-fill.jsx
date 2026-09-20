import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exvhs1b_r.css';
import '../../css/k/klb_tkdzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exvhs1b_r"/><path clip-rule="evenodd" class="klb_tkdzt"/>`,
		"fallback": "mingcute:router-modem-fill",
	});
}

export default Component;
