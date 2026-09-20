import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7utr94ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7utr94ws"/>`,
		"fallback": "tabler:shield-off",
	});
}

export default Component;
