import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq8kijp9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq8kijp9j"/>`,
		"fallback": "mdi:sign-language-outline",
	});
}

export default Component;
