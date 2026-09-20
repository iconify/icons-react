import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0_scebir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0_scebir"/>`,
		"fallback": "mdi:letter-c-box",
	});
}

export default Component;
