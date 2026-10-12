import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy_c4nbmc.css';
import '../../css/e/elhn0g7ph.css';
import '../../css/f/f6qv5_awe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dy_c4nbmc"/><path class="elhn0g7ph"/><path class="f6qv5_awe"/></g>`,
		"fallback": "lucide-extended:send-horizontal-duotone",
	});
}

export default Component;
