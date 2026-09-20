import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2p_l-b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2p_l-b6d"/>`,
		"fallback": "mingcute:service-fill",
	});
}

export default Component;
