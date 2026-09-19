import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnym00-jn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rnym00-jn"/>`,
		"fallback": "heroicons-solid:status-online",
	});
}

export default Component;
