import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eufzisjlz.css';
import '../../css/z/znzepibwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eufzisjlz"/><path class="znzepibwq"/></g>`,
		"fallback": "solar:magnet-line-duotone",
	});
}

export default Component;
