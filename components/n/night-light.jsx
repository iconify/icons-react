import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpbmd6afz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpbmd6afz"/>`,
		"fallback": "boxicons:night-light",
	});
}

export default Component;
