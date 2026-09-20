import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl9z38o3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl9z38o3k"/>`,
		"fallback": "mdi:seal-variant",
	});
}

export default Component;
