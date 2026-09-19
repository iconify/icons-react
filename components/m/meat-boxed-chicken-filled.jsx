import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7bn4pn8n.css';
import '../../css/c/c4-96kq0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7bn4pn8n"/><path class="c4-96kq0k"/></g>`,
		"fallback": "griddy-icons:meat-boxed-chicken-filled",
	});
}

export default Component;
