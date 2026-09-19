import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a52srz_ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a52srz_ma"/>`,
		"fallback": "boxicons:message-circle-heart-filled",
	});
}

export default Component;
