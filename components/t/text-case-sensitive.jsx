import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd17a1b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd17a1b3y"/>`,
		"fallback": "andrsrxn:text-case-sensitive",
	});
}

export default Component;
