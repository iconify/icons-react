import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u5ecbfbjc.css';
import '../../css/a/akx15pb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u5ecbfbjc"/><path class="akx15pb0y"/></g>`,
		"fallback": "reicon:repeate-one",
	});
}

export default Component;
