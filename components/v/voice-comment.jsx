import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x99iestqa.css';
import '../../css/b/b2hj-bbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x99iestqa"/><path class="b2hj-bbcq"/></g>`,
		"fallback": "hugeicons:voice-comment",
	});
}

export default Component;
