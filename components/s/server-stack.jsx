import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p454a_g3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p454a_g3k"/>`,
		"fallback": "heroicons:server-stack",
	});
}

export default Component;
