import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c9gwod_vd.css';
import '../../css/j/ji9sd3owh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c9gwod_vd"/><path class="ji9sd3owh"/></g>`,
		"fallback": "streamline-ultimate:light-mode-bright-dark",
	});
}

export default Component;
