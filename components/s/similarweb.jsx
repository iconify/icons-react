import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_iv8bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu_iv8bix"/>`,
		"fallback": "simple-icons:similarweb",
	});
}

export default Component;
