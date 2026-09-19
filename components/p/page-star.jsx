import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvqzm2bpy.css';
import '../../css/z/zebskk62u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uvqzm2bpy"/><path class="zebskk62u"/></g>`,
		"fallback": "iconoir:page-star",
	});
}

export default Component;
