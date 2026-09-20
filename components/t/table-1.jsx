import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhf8jdbps.css';
import '../../css/c/cl8fe2bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mhf8jdbps"/><path class="cl8fe2bvn"/></g>`,
		"fallback": "tdesign:table-1",
	});
}

export default Component;
