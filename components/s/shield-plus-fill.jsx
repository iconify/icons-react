import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l02yb_gpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l02yb_gpy"/>`,
		"fallback": "keyline-icons:shield-plus-fill",
	});
}

export default Component;
