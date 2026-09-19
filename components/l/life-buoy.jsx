import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok0fmmf9p.css';
import '../../css/y/yulr7db-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ok0fmmf9p"/><path class="yulr7db-p"/></g>`,
		"fallback": "hugeicons:life-buoy",
	});
}

export default Component;
