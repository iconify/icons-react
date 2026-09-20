import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yshf66bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yshf66bju"/>`,
		"fallback": "solar:sidebar-code-bold",
	});
}

export default Component;
