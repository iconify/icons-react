import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e27oc0i3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e27oc0i3o"/>`,
		"fallback": "ri:vip-diamond-fill",
	});
}

export default Component;
