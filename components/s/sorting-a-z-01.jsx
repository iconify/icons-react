import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ope5wjb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ope5wjb1v"/>`,
		"fallback": "hugeicons:sorting-a-z-01",
	});
}

export default Component;
