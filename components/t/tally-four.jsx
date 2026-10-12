import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op4b25bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op4b25bpu"/>`,
		"fallback": "andrsrxn:tally-four",
	});
}

export default Component;
