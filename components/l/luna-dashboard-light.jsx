import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0hk8168n.css';
import '../../css/e/e5i_hobjt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0hk8168n"/><path class="e5i_hobjt"/>`,
		"fallback": "selfhst:luna-dashboard-light",
	});
}

export default Component;
