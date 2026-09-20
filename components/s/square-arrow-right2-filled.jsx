import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-z_mbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4-z_mbvu"/>`,
		"fallback": "reicon:square-arrow-right2-filled",
	});
}

export default Component;
