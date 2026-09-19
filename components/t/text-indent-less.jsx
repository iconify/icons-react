import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku1p59bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku1p59bor"/>`,
		"fallback": "hugeicons:text-indent-less",
	});
}

export default Component;
