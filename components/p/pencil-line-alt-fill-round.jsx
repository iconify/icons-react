import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_0pmlbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_0pmlbhk"/>`,
		"fallback": "coolicons:pencil-line-alt-fill-round",
	});
}

export default Component;
