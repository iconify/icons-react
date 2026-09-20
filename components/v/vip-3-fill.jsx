import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbo8fs4al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbo8fs4al"/>`,
		"fallback": "mingcute:vip-3-fill",
	});
}

export default Component;
