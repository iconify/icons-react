import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efqq9-b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efqq9-b6m"/>`,
		"fallback": "reicon:mic-off-filled",
	});
}

export default Component;
