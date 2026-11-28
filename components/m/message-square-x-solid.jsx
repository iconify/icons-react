import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql2qn_7vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql2qn_7vp"/>`,
		"fallback": "iconaut:message-square-x-solid",
	});
}

export default Component;
