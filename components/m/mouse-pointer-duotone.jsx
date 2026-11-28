import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0xvr4gta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary z0xvr4gta"/>`,
		"fallback": "iconaut:mouse-pointer-duotone",
	});
}

export default Component;
