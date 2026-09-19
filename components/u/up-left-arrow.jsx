import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qscg1vb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qscg1vb6y"/>`,
		"fallback": "guidance:up-left-arrow",
	});
}

export default Component;
