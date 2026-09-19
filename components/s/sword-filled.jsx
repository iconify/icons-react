import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trpv30d6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trpv30d6q"/>`,
		"fallback": "boxicons:sword-filled",
	});
}

export default Component;
