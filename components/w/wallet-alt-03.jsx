import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsa254b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsa254b_j"/>`,
		"fallback": "griddy-icons:wallet-alt-03",
	});
}

export default Component;
