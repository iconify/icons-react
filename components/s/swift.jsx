import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sca37yamv.css';
import '../../css/v/vai7pxbnt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="sca37yamv"/><path class="vai7pxbnt"/></g>`,
		"fallback": "skill-icons:swift",
	});
}

export default Component;
