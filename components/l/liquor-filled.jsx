import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7x8jdbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7x8jdbrz"/>`,
		"fallback": "tdesign:liquor-filled",
	});
}

export default Component;
