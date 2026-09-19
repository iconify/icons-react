import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pghnx8bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pghnx8bkt"/>`,
		"fallback": "hugeicons:mirror",
	});
}

export default Component;
