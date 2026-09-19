import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm4zdvz_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm4zdvz_g"/>`,
		"fallback": "ci:message-check",
	});
}

export default Component;
