import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3sqqlhva.css';
import '../../css/c/chzs_jb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z3sqqlhva"/><path class="chzs_jb0w"/></g>`,
		"fallback": "si:twitter-duotone",
	});
}

export default Component;
