import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zix_86b2w.css';
import '../../css/k/k_1w6h3qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zix_86b2w"/><path clip-rule="evenodd" class="k_1w6h3qx"/>`,
		"fallback": "mingcute:viber-messenger-line",
	});
}

export default Component;
