import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ys7_ulb1x.css';
import '../../css/a/a9hgvjujd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ys7_ulb1x"/><path class="a9hgvjujd"/></g>`,
		"fallback": "mage:memory-card",
	});
}

export default Component;
