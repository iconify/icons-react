import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr-ju4bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr-ju4bem"/>`,
		"fallback": "mingcute:light-line",
	});
}

export default Component;
