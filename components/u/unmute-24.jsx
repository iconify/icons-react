import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7bn6nb8f.css';
import '../../css/i/izn9dcbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7bn6nb8f"/><path class="izn9dcbqs"/>`,
		"fallback": "octicon:unmute-24",
	});
}

export default Component;
