import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk54-pk0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk54-pk0m"/>`,
		"fallback": "octicon:spacing-small-24",
	});
}

export default Component;
