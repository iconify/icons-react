import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fte21iv7s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fte21iv7s"/>`,
		"fallback": "bi:linkedin",
	});
}

export default Component;
