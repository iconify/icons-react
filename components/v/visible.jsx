import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/rx0u5xj3k.css';
import '../../css/b/be1gmsdnh.css';
import '../../css/q/qcj2453as.css';
import '../../css/e/e0hrr7bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="rx0u5xj3k"/><path class="be1gmsdnh"/><path class="qcj2453as"/><path class="e0hrr7bpu"/></g>`,
		"fallback": "streamline-sharp-color:visible",
	});
}

export default Component;
