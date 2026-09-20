import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5t-u2bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5t-u2bic"/>`,
		"fallback": "ri:signal-cellular-3-line",
	});
}

export default Component;
