import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z8bw-lkti.css';
import '../../css/h/hj563rg-r.css';
import '../../css/y/y8wejeb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z8bw-lkti"/><path class="hj563rg-r"/><path class="y8wejeb2z"/></g>`,
		"fallback": "hugeicons:money-send-flow-01",
	});
}

export default Component;
