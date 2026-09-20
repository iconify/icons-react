import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eglm_cbls.css';
import '../../css/q/qipkcw4jx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eglm_cbls"/><path class="qipkcw4jx"/></g>`,
		"fallback": "streamline-color:signal-medium-flat",
	});
}

export default Component;
