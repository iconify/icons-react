import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y90iic0su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y90iic0su"/>`,
		"fallback": "keyline-icons:search-2-check",
	});
}

export default Component;
