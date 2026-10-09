import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4lrodbjn.css';
import '../../css/y/ykzqhcc_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4lrodbjn"/><path class="ykzqhcc_o"/>`,
		"fallback": "energy-icons:podium-48",
	});
}

export default Component;
