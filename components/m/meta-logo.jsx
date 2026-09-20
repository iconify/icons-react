import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr53lcc8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr53lcc8e"/>`,
		"fallback": "streamline-ultimate:meta-logo",
	});
}

export default Component;
