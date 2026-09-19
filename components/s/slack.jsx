import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxkfan9rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxkfan9rf"/>`,
		"fallback": "ci:slack",
	});
}

export default Component;
