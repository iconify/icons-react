import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llh0qcb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llh0qcb5e"/>`,
		"fallback": "keyline-icons:shuffle-fill",
	});
}

export default Component;
