import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a29uejbfv.css';
import '../../css/k/kty__eb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a29uejbfv"/><path class="kty__eb4m"/></g>`,
		"fallback": "coolicons:toggle-left-bulk-round",
	});
}

export default Component;
