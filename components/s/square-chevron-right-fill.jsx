import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqg-h8wnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqg-h8wnj"/>`,
		"fallback": "keyline-icons:square-chevron-right-fill",
	});
}

export default Component;
