import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osh5ijbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osh5ijbct"/>`,
		"fallback": "mynaui:letter-i-circle-solid",
	});
}

export default Component;
