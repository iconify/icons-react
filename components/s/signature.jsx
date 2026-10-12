import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eor8zd4cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eor8zd4cv"/>`,
		"fallback": "andrsrxn:signature",
	});
}

export default Component;
