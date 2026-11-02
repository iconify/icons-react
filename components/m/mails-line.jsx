import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5s1p_b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5s1p_b-z"/>`,
		"fallback": "mingcute:mails-line",
	});
}

export default Component;
