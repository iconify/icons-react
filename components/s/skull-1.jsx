import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nc2oourwb.css';
import '../../css/p/pvr6if5hc.css';
import '../../css/r/rakoyhd2b.css';
import '../../css/z/zxz2a-0bd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nc2oourwb"/><path class="pvr6if5hc"/><path class="rakoyhd2b"/><path class="zxz2a-0bd"/></g>`,
		"fallback": "streamline-color:skull-1",
	});
}

export default Component;
