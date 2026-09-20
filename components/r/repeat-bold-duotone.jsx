import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cn-54jt8c.css';
import '../../css/t/t98v_abew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cn-54jt8c"/><path class="t98v_abew"/></g>`,
		"fallback": "solar:repeat-bold-duotone",
	});
}

export default Component;
