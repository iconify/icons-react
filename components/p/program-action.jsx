import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yen3ajh1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yen3ajh1v"/>`,
		"fallback": "carbon:program-action",
	});
}

export default Component;
