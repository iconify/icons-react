import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edu-5ablw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edu-5ablw"/>`,
		"fallback": "noviair:message-square-info",
	});
}

export default Component;
