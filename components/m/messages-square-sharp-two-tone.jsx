import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j5swtu6lm.css';
import '../../css/y/yfux20bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j5swtu6lm"/><path class="yfux20bpz"/></g>`,
		"fallback": "keyline-icons:messages-square-sharp-two-tone",
	});
}

export default Component;
