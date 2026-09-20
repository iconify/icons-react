import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoyieznpz.css';
import '../../css/o/oa70avbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="ft5dv1b6b"><path class="zoyieznpz"/><path class="oa70avbkb"/></g>`,
		"fallback": "si:lightning-duotone",
	});
}

export default Component;
