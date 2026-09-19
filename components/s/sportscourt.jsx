import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edp_iow0e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edp_iow0e"/>`,
		"fallback": "f7:sportscourt",
	});
}

export default Component;
