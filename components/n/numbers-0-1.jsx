import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feki1l08y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feki1l08y"/>`,
		"fallback": "tdesign:numbers-0-1",
	});
}

export default Component;
