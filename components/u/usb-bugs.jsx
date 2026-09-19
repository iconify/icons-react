import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k85dh-b-g.css';
import '../../css/r/r8bzvdbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k85dh-b-g"/><path class="r8bzvdbhr"/></g>`,
		"fallback": "hugeicons:usb-bugs",
	});
}

export default Component;
