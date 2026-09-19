import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1c-uwa3f.css';
import '../../css/f/ffogbjbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1c-uwa3f"/><path class="ffogbjbkx"/></g>`,
		"fallback": "mono-icons:tag",
	});
}

export default Component;
