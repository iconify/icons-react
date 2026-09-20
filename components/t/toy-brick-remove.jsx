import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yldvkm25s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yldvkm25s"/>`,
		"fallback": "mdi:toy-brick-remove",
	});
}

export default Component;
