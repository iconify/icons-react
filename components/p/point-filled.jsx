import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo7ac-bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo7ac-bbz"/>`,
		"fallback": "tabler:point-filled",
	});
}

export default Component;
