import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb2tv0bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb2tv0bxg"/>`,
		"fallback": "tdesign:numbers-7-1",
	});
}

export default Component;
