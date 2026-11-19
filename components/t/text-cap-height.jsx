import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfe689qoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfe689qoe"/>`,
		"fallback": "andrsrxn:text-cap-height",
	});
}

export default Component;
