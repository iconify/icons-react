import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jonwy6b0f.css';
import '../../css/c/c7-6eoe9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jonwy6b0f"/><path class="c7-6eoe9s"/></g>`,
		"fallback": "hugeicons:message-download-01",
	});
}

export default Component;
