import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/obv9_7b8t.css';
import '../../css/v/vexengbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="obv9_7b8t"/><path class="vexengbun"/></g>`,
		"fallback": "hugeicons:modern-tv-issue",
	});
}

export default Component;
