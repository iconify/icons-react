import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm39wsvkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm39wsvkq"/>`,
		"fallback": "ri:question-fill",
	});
}

export default Component;
