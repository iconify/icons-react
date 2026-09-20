import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wjg491cmr.css';
import '../../css/x/x53rcgbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wjg491cmr"/><path class="x53rcgbgc"/></g>`,
		"fallback": "reicon:save-minus",
	});
}

export default Component;
