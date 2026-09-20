import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqxl1zbni.css';
import '../../css/w/w7d_6f7vi.css';
import '../../css/u/ud_qpnbzi.css';
import '../../css/y/yqyv0cbbr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gqxl1zbni"/><path class="w7d_6f7vi"/><path class="ud_qpnbzi"/><path class="yqyv0cbbr"/></g>`,
		"fallback": "streamline-flex-color:screenshot",
	});
}

export default Component;
