import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz1-jibwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz1-jibwk"/>`,
		"fallback": "mynaui:letter-x-diamond-solid",
	});
}

export default Component;
