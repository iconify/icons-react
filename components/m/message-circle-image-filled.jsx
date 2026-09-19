import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upt-3cclz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upt-3cclz"/>`,
		"fallback": "boxicons:message-circle-image-filled",
	});
}

export default Component;
