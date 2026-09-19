import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-zn-8bsh.css';
import '../../css/a/alhtyneji.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t-zn-8bsh"/><path class="alhtyneji"/></g>`,
		"fallback": "bi:usb-c",
	});
}

export default Component;
