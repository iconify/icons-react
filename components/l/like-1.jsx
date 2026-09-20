import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/c-40n-h_v.css';
import '../../css/m/mlyz9w5wp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="c-40n-h_v"/><path class="mlyz9w5wp"/></g>`,
		"fallback": "streamline-plump:like-1",
	});
}

export default Component;
