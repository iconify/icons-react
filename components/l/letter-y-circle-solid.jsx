import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1gl9ibjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1gl9ibjj"/>`,
		"fallback": "mynaui:letter-y-circle-solid",
	});
}

export default Component;
