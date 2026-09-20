import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdnvzw9yj.css';
import '../../css/q/qxolf0ezv.css';
import '../../css/i/ial1q7bmc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cdnvzw9yj"/><path clip-rule="evenodd" class="qxolf0ezv"/><path class="ial1q7bmc"/></g>`,
		"fallback": "streamline-flex-color:online-medical-service-monitor-flat",
	});
}

export default Component;
