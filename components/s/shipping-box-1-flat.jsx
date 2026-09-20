import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkt6hab4n.css';
import '../../css/q/qwr-sdbpf.css';
import '../../css/b/b4q2_3qyx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rkt6hab4n"/><path class="qwr-sdbpf"/><path clip-rule="evenodd" class="b4q2_3qyx"/></g>`,
		"fallback": "streamline-plump-color:shipping-box-1-flat",
	});
}

export default Component;
