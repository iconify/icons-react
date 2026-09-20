import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj6zkua8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj6zkua8i"/>`,
		"fallback": "si:pin-alt-2-fill",
	});
}

export default Component;
