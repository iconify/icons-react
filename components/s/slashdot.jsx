import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3w-4db8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3w-4db8q"/>`,
		"fallback": "cib:slashdot",
	});
}

export default Component;
