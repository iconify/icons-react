import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tnsj789wj.css';
import '../../css/y/yu82shbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tnsj789wj"/><path class="yu82shbdv"/></g>`,
		"fallback": "hugeicons:task-remove-01",
	});
}

export default Component;
