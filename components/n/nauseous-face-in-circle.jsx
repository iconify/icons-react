import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i70zh-6ql.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i70zh-6ql"/>`,
		"fallback": "pinhead:nauseous-face-in-circle",
	});
}

export default Component;
