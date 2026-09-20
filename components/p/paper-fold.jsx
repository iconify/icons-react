import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyih06crx.css';
import '../../css/x/x_90nzbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyih06crx"/><path class="x_90nzbzz"/></g>`,
		"fallback": "majesticons:paper-fold",
	});
}

export default Component;
