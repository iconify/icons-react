import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/t/tgze5hbti.css';
import '../../css/s/stlmuj5hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="tgze5hbti"/><path class="stlmuj5hc"/></g>`,
		"fallback": "keyline-icons:refresh-cw-duotone",
	});
}

export default Component;
