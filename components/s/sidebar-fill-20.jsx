import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqr0_gxzu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqr0_gxzu"/>`,
		"fallback": "garden:sidebar-fill-20",
	});
}

export default Component;
