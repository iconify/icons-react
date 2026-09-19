import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqb9p_p2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqb9p_p2a"/>`,
		"fallback": "boxicons:stop",
	});
}

export default Component;
