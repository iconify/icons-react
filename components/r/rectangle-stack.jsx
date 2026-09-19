import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd6sy5lsi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd6sy5lsi"/>`,
		"fallback": "heroicons-solid:rectangle-stack",
	});
}

export default Component;
