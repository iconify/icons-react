import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj36n2brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj36n2brk"/>`,
		"fallback": "hugeicons:pin-02",
	});
}

export default Component;
