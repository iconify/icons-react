import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/p0fosk.css';
import '../../css/j/j-t5du.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c p0fosk"/><path class="a0m25c j-t5du"/>`,
		"fallback": "line-md:rotate-90",
	});
}

export default Component;
