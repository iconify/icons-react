import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha6wzbc4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha6wzbc4o"/>`,
		"fallback": "bx:trash-alt",
	});
}

export default Component;
