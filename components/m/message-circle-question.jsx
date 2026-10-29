import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k48bdwq9n.css';
import '../../css/g/ge5djsb-y.css';
import '../../css/w/whli9vrlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k48bdwq9n"/><path class="ge5djsb-y"/><path class="whli9vrlz"/></g>`,
		"fallback": "withicons-bauhaus:message-circle-question",
	});
}

export default Component;
