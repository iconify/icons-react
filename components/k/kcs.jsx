import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hf8lpkb0m.css';
import '../../css/y/ym62twrfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="hf8lpkb0m"/><path class="ym62twrfg"/></g>`,
		"fallback": "cryptocurrency-color:kcs",
	});
}

export default Component;
