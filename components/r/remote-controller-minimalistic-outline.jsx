import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqsypxdtv.css';
import '../../css/g/gyxe8j32r.css';
import '../../css/r/rg8vhvbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fqsypxdtv"/><path class="gyxe8j32r"/><path class="rg8vhvbio"/></g>`,
		"fallback": "solar:remote-controller-minimalistic-outline",
	});
}

export default Component;
