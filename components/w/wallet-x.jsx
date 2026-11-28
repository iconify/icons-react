import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caq05db1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caq05db1n"/>`,
		"fallback": "noviair-light:wallet-x",
	});
}

export default Component;
