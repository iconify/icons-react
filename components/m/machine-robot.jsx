import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/frhf97bga.css';
import '../../css/t/tl-h6c7wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="frhf97bga"/><path class="tl-h6c7wi"/></g>`,
		"fallback": "hugeicons:machine-robot",
	});
}

export default Component;
