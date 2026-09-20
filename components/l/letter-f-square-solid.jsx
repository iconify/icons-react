import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe3_xqmxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe3_xqmxk"/>`,
		"fallback": "mynaui:letter-f-square-solid",
	});
}

export default Component;
