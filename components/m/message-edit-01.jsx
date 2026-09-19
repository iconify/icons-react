import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v231k-4gp.css';
import '../../css/u/u9-4pib_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v231k-4gp"/><path class="u9-4pib_d"/></g>`,
		"fallback": "hugeicons:message-edit-01",
	});
}

export default Component;
