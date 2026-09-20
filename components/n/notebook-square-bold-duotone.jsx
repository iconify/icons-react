import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c4z116bnm.css';
import '../../css/f/ftrssobwy.css';
import '../../css/l/lv9n1n5sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c4z116bnm"/><path class="ftrssobwy"/><path class="lv9n1n5sk"/></g>`,
		"fallback": "solar:notebook-square-bold-duotone",
	});
}

export default Component;
