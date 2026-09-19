import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-nva6oky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-nva6oky"/>`,
		"fallback": "hugeicons:layout-align-top",
	});
}

export default Component;
