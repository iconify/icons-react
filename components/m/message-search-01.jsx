import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3x7fbcph.css';
import '../../css/o/odvlycj2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w3x7fbcph"/><path class="odvlycj2t"/></g>`,
		"fallback": "hugeicons:message-search-01",
	});
}

export default Component;
