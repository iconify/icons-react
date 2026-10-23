import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc56p8bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc56p8bzw"/>`,
		"fallback": "vadivam:scan-face",
	});
}

export default Component;
