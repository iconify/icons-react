import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ok21msgig.css';
import '../../css/b/b0-toqeac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ok21msgig secondary"/><path class="b0-toqeac primary"/></g>`,
		"fallback": "iconaut:lamp-desk-duotone",
	});
}

export default Component;
