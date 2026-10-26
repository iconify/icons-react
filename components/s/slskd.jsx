import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv9lpkt2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv9lpkt2d"/>`,
		"fallback": "cbi:slskd",
	});
}

export default Component;
