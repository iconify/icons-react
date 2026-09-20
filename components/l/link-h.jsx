import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-yrc1biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-yrc1biu"/>`,
		"fallback": "uis:link-h",
	});
}

export default Component;
