import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opuzw1uwx.css';
import '../../css/q/qno0y1lhe.css';
import '../../css/e/eahtnssuf.css';
import '../../css/s/soytuhb8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opuzw1uwx"/><path class="qno0y1lhe"/><path class="eahtnssuf"/><path class="soytuhb8m"/></g>`,
		"fallback": "streamline-plump-color:upload-box-1-flat",
	});
}

export default Component;
