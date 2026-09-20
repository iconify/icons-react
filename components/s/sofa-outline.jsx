import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zobiihb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zobiihb8h"/>`,
		"fallback": "solar:sofa-outline",
	});
}

export default Component;
