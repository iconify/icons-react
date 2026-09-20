import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmf7pn_8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmf7pn_8i"/>`,
		"fallback": "tdesign:numbers-5",
	});
}

export default Component;
