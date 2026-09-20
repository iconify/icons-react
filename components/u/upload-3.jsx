import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5ja4vb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5ja4vb_q"/>`,
		"fallback": "subway:upload-3",
	});
}

export default Component;
