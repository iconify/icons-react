import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed1lkddnn.css';
import '../../css/e/e65slbcbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed1lkddnn"/><path class="e65slbcbt"/></g>`,
		"fallback": "tdesign:tea",
	});
}

export default Component;
