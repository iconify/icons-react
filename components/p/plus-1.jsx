import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3ju1lujl.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3ju1lujl"/>`,
		"fallback": "zmdi:plus-1",
	});
}

export default Component;
