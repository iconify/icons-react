import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mr2ezvtrs.css';
import '../../css/s/saj43ywtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mr2ezvtrs"/><path class="saj43ywtb"/></g>`,
		"fallback": "hugeicons:login-03",
	});
}

export default Component;
