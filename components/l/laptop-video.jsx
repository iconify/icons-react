import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbjufu-2w.css';
import '../../css/a/a0sygjdrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pbjufu-2w"/><path class="a0sygjdrl"/></g>`,
		"fallback": "hugeicons:laptop-video",
	});
}

export default Component;
