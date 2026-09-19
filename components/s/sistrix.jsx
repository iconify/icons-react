import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j88m44res.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j88m44res"/>`,
		"fallback": "fa7-brands:sistrix",
	});
}

export default Component;
