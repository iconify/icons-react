import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgevw-brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgevw-brj"/>`,
		"fallback": "token:pstake",
	});
}

export default Component;
