import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-pkdf3ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-pkdf3ku"/>`,
		"fallback": "mdi:sale-box",
	});
}

export default Component;
