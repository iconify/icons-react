import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh8z32gqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh8z32gqy"/>`,
		"fallback": "griddy-icons:unfold-less",
	});
}

export default Component;
