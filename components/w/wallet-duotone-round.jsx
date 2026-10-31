import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yukgxrbru.css';
import '../../css/r/r_v9w-btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yukgxrbru"/><path class="r_v9w-btc"/></g>`,
		"fallback": "coolicons:wallet-duotone-round",
	});
}

export default Component;
