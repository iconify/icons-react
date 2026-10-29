import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swao-2bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swao-2bvw"/>`,
		"fallback": "withicons:message-circle-heart-solid",
	});
}

export default Component;
