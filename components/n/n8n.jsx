import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4977lbqh.css';

const viewBox = {"width":240,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4977lbqh"/>`,
		"fallback": "thesvg:n8n",
	});
}

export default Component;
