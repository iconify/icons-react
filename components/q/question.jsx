import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di0umsr9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di0umsr9p"/>`,
		"fallback": "zondicons:question",
	});
}

export default Component;
