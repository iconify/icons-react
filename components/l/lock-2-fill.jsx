import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5nts0blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5nts0blq"/>`,
		"fallback": "mingcute:lock-2-fill",
	});
}

export default Component;
