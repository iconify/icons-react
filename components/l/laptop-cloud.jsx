import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0sygjdrl.css';
import '../../css/n/n0gz-2b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a0sygjdrl"/><path class="n0gz-2b2u"/></g>`,
		"fallback": "hugeicons:laptop-cloud",
	});
}

export default Component;
