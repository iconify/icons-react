import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2t2tibol.css';
import '../../css/j/j4ch19him.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m2t2tibol"/><path class="j4ch19him"/></g>`,
		"fallback": "hugeicons:waste",
	});
}

export default Component;
