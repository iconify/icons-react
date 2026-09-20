import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh9kv6vns.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh9kv6vns"/>`,
		"fallback": "pinhead:tipi-campsite-with-pound",
	});
}

export default Component;
