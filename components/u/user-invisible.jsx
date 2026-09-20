import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9ncnnybb.css';
import '../../css/t/tmrbs_bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9ncnnybb"/><path class="tmrbs_bnp"/></g>`,
		"fallback": "tdesign:user-invisible",
	});
}

export default Component;
