import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxa8a0btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxa8a0btp"/>`,
		"fallback": "thesvg:scrum-alliance",
	});
}

export default Component;
