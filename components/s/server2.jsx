import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq5e5r7xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nq5e5r7xh"/>`,
		"fallback": "reicon:server2",
	});
}

export default Component;
