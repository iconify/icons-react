import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye__qpbqz.css';
import '../../css/x/xuemwg1jm.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ye__qpbqz"/><path class="xuemwg1jm"/></g>`,
		"fallback": "thesvg-color:merry-ai",
	});
}

export default Component;
