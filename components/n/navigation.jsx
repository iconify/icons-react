import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xra4d6b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xra4d6b9e"/>`,
		"fallback": "keyline-icons:navigation",
	});
}

export default Component;
