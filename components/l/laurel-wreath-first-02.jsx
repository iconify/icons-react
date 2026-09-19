import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf39g8bxz.css';
import '../../css/k/ke7tnh9qz.css';
import '../../css/o/o6ndjgbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yf39g8bxz"/><path class="ke7tnh9qz"/><path class="o6ndjgbdj"/></g>`,
		"fallback": "hugeicons:laurel-wreath-first-02",
	});
}

export default Component;
