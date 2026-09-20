import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbl9r61qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbl9r61qi"/>`,
		"fallback": "uil:spinner-alt",
	});
}

export default Component;
