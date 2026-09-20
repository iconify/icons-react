import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myq_lyb9f.css';
import '../../css/k/kkjzqzj2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myq_lyb9f"/><path class="kkjzqzj2h"/>`,
		"fallback": "mingcute:vip-2-line",
	});
}

export default Component;
