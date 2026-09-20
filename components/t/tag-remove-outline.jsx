import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to542-bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to542-bjg"/>`,
		"fallback": "mdi:tag-remove-outline",
	});
}

export default Component;
