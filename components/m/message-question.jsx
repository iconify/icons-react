import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb-u0qbgn.css';
import '../../css/u/uk3bi2bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wb-u0qbgn"/><path class="uk3bi2bxn"/></g>`,
		"fallback": "hugeicons:message-question",
	});
}

export default Component;
