import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9r-at6ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9r-at6ql"/>`,
		"fallback": "ri:pass-pending-line",
	});
}

export default Component;
