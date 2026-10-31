import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8s2n6y0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8s2n6y0l"/>`,
		"fallback": "coolicons:qr-code-round",
	});
}

export default Component;
