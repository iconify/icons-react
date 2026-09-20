import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/r/r24qpnbne.css';
import '../../css/q/qzyh9393n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="r24qpnbne"/><path class="qzyh9393n"/></g>`,
		"fallback": "streamline-color:square-root-x-circle",
	});
}

export default Component;
