import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtz98abol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtz98abol"/>`,
		"fallback": "boxicons:user-x",
	});
}

export default Component;
