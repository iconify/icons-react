import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf0yc8b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf0yc8b9p"/>`,
		"fallback": "withicons:message-square-plus-gloss",
	});
}

export default Component;
