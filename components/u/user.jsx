import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unwx_ab4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="unwx_ab4n"/>`,
		"fallback": "griddy-icons:user",
	});
}

export default Component;
