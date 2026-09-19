import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/ve55a59qk.css';
import '../../css/f/fytlo8puk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ve55a59qk"/><path class="fytlo8puk"/></g>`,
		"fallback": "hugeicons:new-twitter-rectangle",
	});
}

export default Component;
