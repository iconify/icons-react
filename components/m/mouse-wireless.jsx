import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao8f8-b_o.css';
import '../../css/l/lla2ij4rl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ao8f8-b_o"/><path class="lla2ij4rl"/></g>`,
		"fallback": "streamline-color:mouse-wireless",
	});
}

export default Component;
