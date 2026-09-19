import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l59r7vq1m.css';
import '../../css/k/ky3hlkj1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l59r7vq1m"/><path class="ky3hlkj1j"/></g>`,
		"fallback": "hugeicons:sleeveless",
	});
}

export default Component;
