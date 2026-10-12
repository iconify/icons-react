import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0op42-db.css';
import '../../css/n/nazu9t1bw.css';
import '../../css/e/e-7p8xbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c0op42-db"/><path class="nazu9t1bw"/><path class="e-7p8xbgf"/></g>`,
		"fallback": "lucide-extended:robot-arm-duotone",
	});
}

export default Component;
