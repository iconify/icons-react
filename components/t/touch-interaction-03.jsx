import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uu8ni758b.css';
import '../../css/d/d824o581c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uu8ni758b"/><path class="d824o581c"/></g>`,
		"fallback": "hugeicons:touch-interaction-03",
	});
}

export default Component;
