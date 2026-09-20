import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4hz-abim.css';
import '../../css/z/zyob3oclq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4hz-abim"/><path clip-rule="evenodd" class="zyob3oclq"/></g>`,
		"fallback": "majesticons:tag-off",
	});
}

export default Component;
