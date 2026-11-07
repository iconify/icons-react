import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4_4mjb9l.css';
import '../../css/a/a8539c-uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4_4mjb9l"/><path class="a8539c-uv"/>`,
		"fallback": "solar:outgoing-call-rounded-bold",
	});
}

export default Component;
