import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz0-u9bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz0-u9bdl"/>`,
		"fallback": "uis:paragraph",
	});
}

export default Component;
