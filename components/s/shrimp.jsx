import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0qbj-82r.css';
import '../../css/f/fxxwtgszc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0qbj-82r"/><path class="fxxwtgszc"/></g>`,
		"fallback": "tdesign:shrimp",
	});
}

export default Component;
