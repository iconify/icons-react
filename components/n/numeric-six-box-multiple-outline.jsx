import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syl5sxbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syl5sxbgf"/>`,
		"fallback": "mdi:numeric-six-box-multiple-outline",
	});
}

export default Component;
