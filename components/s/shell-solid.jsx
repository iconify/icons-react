import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj1y1wbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj1y1wbsv"/>`,
		"fallback": "iconaut:shell-solid",
	});
}

export default Component;
