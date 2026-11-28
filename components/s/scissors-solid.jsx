import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oku_46b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oku_46b7i"/>`,
		"fallback": "iconaut:scissors-solid",
	});
}

export default Component;
