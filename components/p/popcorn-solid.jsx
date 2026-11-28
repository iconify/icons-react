import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-357n8kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-357n8kv"/>`,
		"fallback": "iconaut:popcorn-solid",
	});
}

export default Component;
