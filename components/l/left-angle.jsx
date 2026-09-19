import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i9vm9blzj.css';
import '../../css/c/ccg5dxidu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i9vm9blzj"/><path class="ccg5dxidu"/></g>`,
		"fallback": "hugeicons:left-angle",
	});
}

export default Component;
