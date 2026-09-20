import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zme8-pb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zme8-pb0e"/>`,
		"fallback": "solar:treadmill-outline",
	});
}

export default Component;
