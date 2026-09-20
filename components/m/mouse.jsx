import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfax0i5fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfax0i5fy"/>`,
		"fallback": "reicon:mouse",
	});
}

export default Component;
