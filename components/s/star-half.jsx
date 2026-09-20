import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y72p_ms0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y72p_ms0k"/>`,
		"fallback": "prime:star-half",
	});
}

export default Component;
