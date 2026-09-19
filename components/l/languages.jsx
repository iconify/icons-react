import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vg_mfewlj.css';
import '../../css/t/t7jeqikqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vg_mfewlj"/><path class="t7jeqikqu"/></g>`,
		"fallback": "hugeicons:languages",
	});
}

export default Component;
