import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic52moyir.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic52moyir"/>`,
		"fallback": "zmdi:reddit",
	});
}

export default Component;
