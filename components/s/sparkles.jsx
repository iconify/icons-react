import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk9oe7p9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk9oe7p9c"/>`,
		"fallback": "heroicons-outline:sparkles",
	});
}

export default Component;
