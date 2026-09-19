import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hnr0-6bxd.css';
import '../../css/p/p6ebeifwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hnr0-6bxd"/><path class="p6ebeifwn"/></g>`,
		"fallback": "hugeicons:note-04",
	});
}

export default Component;
