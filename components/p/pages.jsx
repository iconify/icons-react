import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npjvtjnms.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npjvtjnms"/>`,
		"fallback": "zmdi:pages",
	});
}

export default Component;
