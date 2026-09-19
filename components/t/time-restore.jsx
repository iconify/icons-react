import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n02cxkblj.css';

const viewBox = {"width":448,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n02cxkblj"/>`,
		"fallback": "zmdi:time-restore",
	});
}

export default Component;
