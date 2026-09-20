import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyt6z2bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyt6z2bxl"/>`,
		"fallback": "tabler:square-letter-l-filled",
	});
}

export default Component;
