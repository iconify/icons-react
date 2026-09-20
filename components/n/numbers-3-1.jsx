import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9jmp33sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9jmp33sa"/>`,
		"fallback": "tdesign:numbers-3-1",
	});
}

export default Component;
