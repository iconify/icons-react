import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z28x9zbap.css';
import '../../css/u/u_5xkab7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z28x9zbap"/><path class="u_5xkab7j"/></g>`,
		"fallback": "hugeicons:message-edit-02",
	});
}

export default Component;
