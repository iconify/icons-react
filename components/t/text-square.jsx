import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/te89nobef.css';
import '../../css/j/jah6ktbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="te89nobef"/><path class="jah6ktbbe"/></g>`,
		"fallback": "hugeicons:text-square",
	});
}

export default Component;
