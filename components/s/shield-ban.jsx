import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te3fbc6yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te3fbc6yw"/>`,
		"fallback": "hugeicons:shield-ban",
	});
}

export default Component;
