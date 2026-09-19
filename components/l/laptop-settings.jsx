import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0sygjdrl.css';
import '../../css/c/cv8g439-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a0sygjdrl"/><path class="cv8g439-t"/></g>`,
		"fallback": "hugeicons:laptop-settings",
	});
}

export default Component;
