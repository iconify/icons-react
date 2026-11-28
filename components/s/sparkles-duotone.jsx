import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9-3s5kyd.css';
import '../../css/h/hrud5ubbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b9-3s5kyd secondary"/><path class="hrud5ubbq primary"/></g>`,
		"fallback": "iconaut:sparkles-duotone",
	});
}

export default Component;
