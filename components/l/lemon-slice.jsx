import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3m11ob_t.css';
import '../../css/r/ruwp4ce-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3m11ob_t"/><path class="ruwp4ce-i"/></g>`,
		"fallback": "tdesign:lemon-slice",
	});
}

export default Component;
