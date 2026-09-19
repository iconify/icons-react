import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le776z0rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le776z0rd"/>`,
		"fallback": "gg:math-plus",
	});
}

export default Component;
