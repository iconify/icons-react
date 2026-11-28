import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld262t2kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld262t2kt"/>`,
		"fallback": "iconaut:kettle-solid",
	});
}

export default Component;
