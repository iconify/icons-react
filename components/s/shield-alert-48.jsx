import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsrljbwz.css';
import '../../css/q/qnv2-7buh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsrljbwz"/><path class="qnv2-7buh"/>`,
		"fallback": "energy-icons:shield-alert-48",
	});
}

export default Component;
