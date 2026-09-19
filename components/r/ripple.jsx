import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4tanacyw.css';
import '../../css/g/gey23jb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4tanacyw"/><path class="gey23jb5v"/></g>`,
		"fallback": "hugeicons:ripple",
	});
}

export default Component;
