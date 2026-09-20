import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex6_f7bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex6_f7bqt"/>`,
		"fallback": "simple-icons:vauxhall",
	});
}

export default Component;
