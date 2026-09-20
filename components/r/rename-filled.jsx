import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv8oabbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv8oabbcx"/>`,
		"fallback": "tdesign:rename-filled",
	});
}

export default Component;
