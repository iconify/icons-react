import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wigpk_r0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wigpk_r0f"/>`,
		"fallback": "withicons:message-square-text-solid",
	});
}

export default Component;
