import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d_rk4bcnx.css';
import '../../css/l/lo3ilabyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="d_rk4bcnx"/><path class="lo3ilabyb"/></g>`,
		"fallback": "streamline-plump:paintbrush-2",
	});
}

export default Component;
