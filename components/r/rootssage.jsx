import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm5xtt9xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm5xtt9xj"/>`,
		"fallback": "simple-icons:rootssage",
	});
}

export default Component;
