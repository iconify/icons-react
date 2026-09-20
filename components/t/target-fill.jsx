import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cftmv-7vf.css';
import '../../css/q/qatjtz6wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cftmv-7vf"/><path class="qatjtz6wg"/></g>`,
		"fallback": "lets-icons:target-fill",
	});
}

export default Component;
