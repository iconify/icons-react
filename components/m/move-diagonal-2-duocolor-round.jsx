import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knisc_b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knisc_b1o"/>`,
		"fallback": "coolicons:move-diagonal-2-duocolor-round",
	});
}

export default Component;
