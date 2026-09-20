import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt4o27e6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt4o27e6h"/>`,
		"fallback": "uil:kid",
	});
}

export default Component;
