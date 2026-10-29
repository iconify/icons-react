import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jdanpobzu.css';
import '../../css/v/vvbvbkd5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jdanpobzu"/><path class="vvbvbkd5o"/></g>`,
		"fallback": "withicons-bauhaus:square-code",
	});
}

export default Component;
