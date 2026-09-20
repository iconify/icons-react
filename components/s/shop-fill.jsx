import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx9pka8qs.css';
import '../../css/d/d1k3_cc9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx9pka8qs"/><path clip-rule="evenodd" class="d1k3_cc9d"/>`,
		"fallback": "mingcute:shop-fill",
	});
}

export default Component;
