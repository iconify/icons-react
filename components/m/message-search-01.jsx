import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-2_-phup.css';
import '../../css/d/dsfj0ubex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t-2_-phup"/><path class="dsfj0ubex"/></g>`,
		"fallback": "hugeicons:message-search-01",
	});
}

export default Component;
