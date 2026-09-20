import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i02_1ybng.css';
import '../../css/x/xpa-9pbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i02_1ybng"/><path class="xpa-9pbbr"/></g>`,
		"fallback": "tdesign:store",
	});
}

export default Component;
