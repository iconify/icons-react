import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsfxhb3z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsfxhb3z"/>`,
		"fallback": "heroicons-solid:template",
	});
}

export default Component;
