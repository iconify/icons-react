import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqb2rzwv.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjqb2rzwv"/>`,
		"fallback": "thesvg-color:intelbyte",
	});
}

export default Component;
