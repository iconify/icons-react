import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-o3w7b8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-o3w7b8c"/>`,
		"fallback": "uiw:warning-o",
	});
}

export default Component;
