import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrbt41i1c.css';
import '../../css/g/guq3_9vru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrbt41i1c"/><path class="guq3_9vru"/></g>`,
		"fallback": "lucide-extended:signpost-duotone",
	});
}

export default Component;
