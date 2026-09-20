import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypo4sbb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ypo4sbb9v"/>`,
		"fallback": "reicon:laptop2",
	});
}

export default Component;
