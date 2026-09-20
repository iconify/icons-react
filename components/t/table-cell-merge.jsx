import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm9x808by.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm9x808by"/>`,
		"fallback": "jam:table-cell-merge",
	});
}

export default Component;
