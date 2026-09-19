import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ni9p3zx4b.css';
import '../../css/e/e7ww275hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ni9p3zx4b"/><path class="e7ww275hc"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-liquid-1",
	});
}

export default Component;
