import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptx2rabpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptx2rabpz"/>`,
		"fallback": "thesvg-color:pyup",
	});
}

export default Component;
