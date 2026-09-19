import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg4qi0d9z.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg4qi0d9z"/>`,
		"fallback": "zmdi:link",
	});
}

export default Component;
