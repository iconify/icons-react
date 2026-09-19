import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/enhlbr_bf.css';
import '../../css/u/ujgtwhupj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="enhlbr_bf"/><path class="ujgtwhupj"/></g>`,
		"fallback": "hugeicons:viber",
	});
}

export default Component;
