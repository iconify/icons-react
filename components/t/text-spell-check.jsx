import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofmwquq0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofmwquq0k"/>`,
		"fallback": "andrsrxn:text-spell-check",
	});
}

export default Component;
