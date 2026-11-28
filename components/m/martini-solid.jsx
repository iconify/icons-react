import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z3nykmzfj.css';
import '../../css/m/mnbi32b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z3nykmzfj"/><path class="mnbi32b9w"/></g>`,
		"fallback": "iconaut:martini-solid",
	});
}

export default Component;
