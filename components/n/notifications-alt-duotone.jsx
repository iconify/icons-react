import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5il6vccw.css';
import '../../css/r/r6psnwdnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d5il6vccw"/><path class="r6psnwdnx"/></g>`,
		"fallback": "si:notifications-alt-duotone",
	});
}

export default Component;
