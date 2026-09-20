import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agxgtblvs.css';
import '../../css/y/yu2e-pb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agxgtblvs"/><path class="yu2e-pb7v"/></g>`,
		"fallback": "tdesign:user-1",
	});
}

export default Component;
