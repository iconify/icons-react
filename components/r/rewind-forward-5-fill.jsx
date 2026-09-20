import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nunlv_k3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nunlv_k3g"/>`,
		"fallback": "mingcute:rewind-forward-5-fill",
	});
}

export default Component;
