import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-j2olckq.css';
import '../../css/d/d6n-82bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w-j2olckq"/><path class="d6n-82bpu"/></g>`,
		"fallback": "iconoir:link-slash",
	});
}

export default Component;
