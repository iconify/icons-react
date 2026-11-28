import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjd2x0bfl.css';
import '../../css/j/jjkgeh70e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjd2x0bfl secondary"/><path class="jjkgeh70e primary"/>`,
		"fallback": "iconaut:message-square-duo",
	});
}

export default Component;
