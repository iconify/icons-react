import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxe0xlbcn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxe0xlbcn"/>`,
		"fallback": "carbon:solar-panel",
	});
}

export default Component;
