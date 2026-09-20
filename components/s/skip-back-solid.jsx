import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9vw5s0cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9vw5s0cw"/>`,
		"fallback": "mynaui:skip-back-solid",
	});
}

export default Component;
