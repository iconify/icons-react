import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ktxr9x2nv.css';
import '../../css/m/myy6c9bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ktxr9x2nv"/><path class="myy6c9bde"/></g>`,
		"fallback": "hugeicons:mail-download-02",
	});
}

export default Component;
