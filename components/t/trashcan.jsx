import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi1r8vbsd.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi1r8vbsd"/>`,
		"fallback": "octicon:trashcan",
	});
}

export default Component;
