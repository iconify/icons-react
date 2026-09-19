import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9l4lebje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9l4lebje"/>`,
		"fallback": "heroicons-solid:play-pause",
	});
}

export default Component;
