import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjhk_eb_p.css';
import '../../css/k/k5xt08bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjhk_eb_p"/><path class="k5xt08bar"/>`,
		"fallback": "mingcute:mastercard-line",
	});
}

export default Component;
