import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt9vprasy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt9vprasy"/>`,
		"fallback": "mingcute:maple-leaf-line",
	});
}

export default Component;
