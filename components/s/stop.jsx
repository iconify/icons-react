import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prxt5acnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prxt5acnw"/>`,
		"fallback": "withicons:stop",
	});
}

export default Component;
