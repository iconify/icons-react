import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arvx1qb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arvx1qb2z"/>`,
		"fallback": "cbi:recessed-ceiling",
	});
}

export default Component;
