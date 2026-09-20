import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sesrb2qhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sesrb2qhi"/>`,
		"fallback": "token:robinhood",
	});
}

export default Component;
