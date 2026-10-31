import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvb_mkr1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvb_mkr1v"/>`,
		"fallback": "withicons:message-square-code-gloss",
	});
}

export default Component;
