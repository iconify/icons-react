import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/poyc1firz.css';
import '../../css/v/v2ny-hbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="poyc1firz"/><path class="v2ny-hbsj"/></g>`,
		"fallback": "solar:text-underline-linear",
	});
}

export default Component;
