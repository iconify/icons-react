import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgrr-s0ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgrr-s0ey"/>`,
		"fallback": "cbi:sync-box-alt",
	});
}

export default Component;
