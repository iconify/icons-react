import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9ppw9blh.css';
import '../../css/s/sqkxxvbdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s9ppw9blh"/><path class="sqkxxvbdd"/>`,
		"fallback": "carbon:user-online",
	});
}

export default Component;
