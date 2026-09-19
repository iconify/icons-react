import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jssep6alm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jssep6alm"/>`,
		"fallback": "bi:record-btn-fill",
	});
}

export default Component;
