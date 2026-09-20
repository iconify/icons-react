import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s33psy3qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s33psy3qd"/>`,
		"fallback": "reicon:pause3-filled",
	});
}

export default Component;
