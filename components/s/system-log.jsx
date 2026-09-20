import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifvgv-q9w.css';
import '../../css/z/z2vzrxbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifvgv-q9w"/><path class="z2vzrxbxq"/></g>`,
		"fallback": "tdesign:system-log",
	});
}

export default Component;
