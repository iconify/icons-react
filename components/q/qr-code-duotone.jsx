import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0tqzebet.css';
import '../../css/q/qtp6j1c2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g0tqzebet"/><path class="qtp6j1c2g"/></g>`,
		"fallback": "lucide-extended:qr-code-duotone",
	});
}

export default Component;
