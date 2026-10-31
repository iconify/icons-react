import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq8r0ildq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq8r0ildq"/>`,
		"fallback": "coolicons:users-group-round",
	});
}

export default Component;
