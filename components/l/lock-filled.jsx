import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or-9nt8zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or-9nt8zt"/>`,
		"fallback": "weui:lock-filled",
	});
}

export default Component;
