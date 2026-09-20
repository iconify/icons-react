import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ookn64b0n.css';
import '../../css/h/ho3b_vqbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ookn64b0n"/><path class="ho3b_vqbu"/></g>`,
		"fallback": "tdesign:undertake",
	});
}

export default Component;
