import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y29n1wndq.css';
import '../../css/s/so95n4gpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y29n1wndq"/><path class="so95n4gpp"/></g>`,
		"fallback": "hugeicons:rupee-shield",
	});
}

export default Component;
