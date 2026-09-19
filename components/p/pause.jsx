import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyupctqcd.css';

const viewBox = {"width":9.12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyupctqcd"/>`,
		"fallback": "formkit:pause",
	});
}

export default Component;
