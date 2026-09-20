import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k20jmtbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k20jmtbrr"/>`,
		"fallback": "mingcute:suitcase-2-line",
	});
}

export default Component;
