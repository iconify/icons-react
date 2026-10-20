import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ttvzsqn.css';
import '../../css/c/cnq1mrb_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ttvzsqn"/><path class="cnq1mrb_c"/>`,
		"fallback": "energy-icons:tab-key-48",
	});
}

export default Component;
