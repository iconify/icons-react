import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji-_atb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji-_atb1v"/>`,
		"fallback": "mynaui:letter-j-diamond-solid",
	});
}

export default Component;
