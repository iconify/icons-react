import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwantbbhl.css';
import '../../css/q/q_-3n0glq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wwantbbhl"/><path class="q_-3n0glq"/></g>`,
		"fallback": "hugeicons:nose",
	});
}

export default Component;
