import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpvilr8cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpvilr8cp"/>`,
		"fallback": "cbi:sultan-group-hung",
	});
}

export default Component;
