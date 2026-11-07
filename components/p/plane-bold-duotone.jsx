import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua6aqkoxj.css';
import '../../css/d/d4zi-lbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ua6aqkoxj"/><path class="d4zi-lbzn"/>`,
		"fallback": "solar:plane-bold-duotone",
	});
}

export default Component;
