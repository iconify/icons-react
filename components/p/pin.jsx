import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/benc_65rz.css';

const viewBox = {"width":426,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="benc_65rz"/>`,
		"fallback": "ls:pin",
	});
}

export default Component;
